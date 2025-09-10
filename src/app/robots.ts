import { APP_URL } from '@/core/lib/constants'
import type { MetadataRoute } from 'next'

const baseUrl: string = APP_URL

export default function robots (): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
