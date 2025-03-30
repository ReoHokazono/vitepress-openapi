import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Input } from './Input.vue'

export const inputVariants = cva(
  'daisy-input',
  {
    variants: {
      variant: {
        default: 'bg-muted',
        ghost: 'border-none bg-transparent shadow-none',
        error: 'daisy-input-error border-destructive',
        success: 'daisy-input-success border-success',
      },
      size: {
        default: 'h-10',
        sm: 'daisy-input-sm h-8 px-2 py-1 text-xs',
        lg: 'daisy-input-lg h-12 px-4 py-3 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type InputVariants = VariantProps<typeof inputVariants>
