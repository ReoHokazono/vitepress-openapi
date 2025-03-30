import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'daisy-btn daisy-no-animation',
  {
    variants: {
      variant: {
        default: 'bg-muted font-normal hover:bg-accent hover:text-accent-foreground',
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'daisy-btn-error bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'daisy-btn-outline border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'daisy-btn-secondary bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'daisy-btn-ghost hover:bg-accent hover:text-accent-foreground',
        link: 'daisy-btn-link text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'min-h-10 h-10',
        xs: 'daisy-btn-xs h-7 rounded px-2',
        sm: 'daisy-btn-sm h-9 rounded-md px-3',
        lg: 'daisy-btn-lg h-11 rounded-md px-8',
        icon: 'daisy-btn-square h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
