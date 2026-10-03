import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export function SectionHeading({ title, subtitle, centered, light, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <h2
        className={cn(
          'text-3xl font-heading font-bold tracking-tight sm:text-4xl lg:text-5xl',
          light ? 'text-white' : 'text-secondary'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-4 text-lg max-w-2xl', centered && 'mx-auto', light ? 'text-gray-300' : 'text-muted-foreground')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
