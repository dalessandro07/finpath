import { APP_NAME } from '@/core/lib/constants'
import { cn } from '@/core/lib/utils'
import Link from 'next/link'

interface LogoProps {
  /**
   * Tamaño del logo
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /**
   * Variante del logo
   */
  variant?: 'default' | 'minimal' | 'with-slogan'
  /**
   * Si el logo debe ser un enlace
   */
  href?: string
  /**
   * Clases CSS adicionales
   */
  className?: string
  /**
   * Si debe mostrar el slogan
   */
  showSlogan?: boolean
  /**
   * Color del logo
   */
  color?: 'default' | 'primary' | 'secondary' | 'muted'
}

const sizeClasses = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
  xl: 'text-3xl'
}

const colorClasses = {
  default: 'text-foreground',
  primary: 'text-primary',
  secondary: 'text-secondary-foreground',
  muted: 'text-muted-foreground'
}

const LogoIcon = ({ size = 'md' }: { size?: LogoProps['size'] }) => {
  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10'
  }

  return (
    <svg className={iconSizes[size || 'md']} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M8.12132 15.8787C7.57843 15.3358 6.82843 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21C7.65685 21 9 19.6569 9 18C9 17.1716 8.66421 16.4216 8.12132 15.8787ZM8.12132 15.8787L15.8787 8.12132M15.8787 8.12132C16.4216 8.66421 17.1716 9 18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 6.82843 15.3358 7.57843 15.8787 8.12132ZM15.8787 8.12132L15.8828 8.11719" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

export default function Logo ({
  size = 'md',
  variant = 'default',
  href = '/',
  className = '',
  showSlogan = false,
  color = 'default'
}: LogoProps) {
  const logoContent = (
    <div className={cn('flex items-center gap-2', className)}>
      {variant !== 'minimal' && <LogoIcon size={size} />}

      <div className="flex flex-col">
        <span
          className={cn(
            'font-bold lowercase tracking-tight',
            sizeClasses[size],
            colorClasses[color]
          )}
        >
          {APP_NAME}
        </span>

        {(variant === 'with-slogan' || showSlogan) && (
          <span className="text-xs text-muted-foreground leading-none">
            Tu camino hacia la libertad financiera
          </span>
        )}
      </div>
    </div>
  )

  if (href) {
    return (
      <Link
        href={href}
        className="inline-block transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
        aria-label={`${APP_NAME} - Ir al inicio`}
      >
        {logoContent}
      </Link>
    )
  }

  return logoContent
}
