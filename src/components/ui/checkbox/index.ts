import { cva } from 'class-variance-authority'

export { default as Checkbox } from './Checkbox.vue'

export const checkboxClasses = cva([
  'daisy-checkbox',
  'h-4 w-4 shrink-0 rounded-sm border',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  'disabled:cursor-not-allowed disabled:opacity-50',
], {
  variants: {
    checked: {
      true: 'daisy-checkbox-primary bg-primary text-primary-foreground',
      false: 'bg-white dark:bg-gray-600 border-primary',
    },
  },
  defaultVariants: {
    checked: false,
  },
})
