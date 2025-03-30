import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Badge } from './Badge.vue'

export const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'daisy-badge daisy-badge-primary border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'daisy-badge daisy-badge-secondary border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'daisy-badge daisy-badge-error border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'daisy-badge daisy-badge-outline text-foreground bg-muted border-[var(--vp-c-divider)]',
        plain: 'px-2 py-1 rounded border-0',
      },
      size: {
        default: '',
        xs: 'daisy-badge-xs rounded px-1',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
