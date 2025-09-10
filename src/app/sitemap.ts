import { APP_URL } from '@/core/lib/constants'
import fs from 'fs/promises'
import type { MetadataRoute } from 'next'
import path from 'path'

interface SitemapConfig {
  baseUrl: string
  manualRoutes: { route: string; lastModified: string }[]
}

/**
 * Sitemap configuration
 *
 * @property {string} url - The base URL of the site.
 * @property {{ route: string; lastModified: string }[]} manualRoutes - A list of manually defined routes with custom last modified dates.
 *
 */
const sitemapConfig: SitemapConfig = {
  baseUrl: APP_URL,
  manualRoutes: [],
}

const getFiles = async (
  dir: string,
  extensions: string[]
): Promise<string[]> => {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files: string[] = []

  for (const entry of entries) {
    if (entry.parentPath.includes('(.')) continue

    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      const nestedFiles = await getFiles(fullPath, extensions)
      files.push(...nestedFiles)
    } else if (extensions.some((ext) => entry.name.endsWith(ext))) {
      files.push(fullPath)
    }
  }

  return files
}

const getBasePath = async (): Promise<string> => {
  const srcAppPath = path.join(process.cwd(), 'src/app')
  const appPath = path.join(process.cwd(), 'app')
  try {
    await fs.access(srcAppPath)
    return srcAppPath
  } catch {
    return appPath
  }
}

export default async function sitemap (): Promise<MetadataRoute.Sitemap> {
  const extensions = ['.tsx', '.jsx', '.mdx']
  const basePath = await getBasePath()
  const pages = await getFiles(basePath, extensions)
  const { baseUrl, manualRoutes } = sitemapConfig

  const routes = await Promise.all(
    pages
      .filter((filePath) => /page\.(tsx|jsx|mdx)$/.test(filePath))
      .map(async (filePath) => {
        const relativePath = path.relative(basePath, path.dirname(filePath))
        const route =
          relativePath === ''
            ? '/'
            : `/${relativePath
              .replace(/\\/g, '/')
              .replace(/\([^\/]+\)/g, '')
              .replace(/\/\/+/g, '/')
              .replace(/^\/|\/$/g, '')}`

        return route
      })
  )

  return routes
    .filter((route) => !route.includes('['))
    .filter((route) => !route.includes('@'))
    .map((route) => {
      const manual = manualRoutes.find((entry) => entry.route === route)
      return {
        url: `${baseUrl}${route}`,
        lastModified: manual ? new Date(manual.lastModified) : new Date(),
      }
    })
}
