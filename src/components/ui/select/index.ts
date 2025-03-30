import { cva } from 'class-variance-authority'

export { default as Select } from './Select.vue'

export const triggerClasses = cva([
  'daisy-select-trigger',
  'flex h-10 w-full items-center justify-between rounded-md',
  'bg-muted px-3 py-2 text-sm ring-offset-background',
  'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  'disabled:cursor-not-allowed disabled:opacity-50',
], {
  variants: {
    open: {
      true: 'ring-2 ring-ring ring-offset-2',
      false: '',
    },
  },
  defaultVariants: {
    open: false,
  },
})
export const contentClasses = cva([
  'daisy-select-content',
  'absolute z-50 max-h-60 min-w-[8rem] overflow-hidden rounded-md border',
  'bg-popover text-popover-foreground shadow-md',
  'animate-in fade-in-80',
  'w-full',
], {
  variants: {
    position: {
      top: 'bottom-full mb-1',
      bottom: 'top-full mt-1',
    },
  },
  defaultVariants: {
    position: 'bottom',
  },
})
export const itemClasses = cva([
  'daisy-select-item',
  'relative flex w-full cursor-default select-none items-center',
  'rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
  'hover:bg-accent hover:text-accent-foreground',
  'focus:bg-accent focus:text-accent-foreground',
], {
  variants: {
    selected: {
      true: 'bg-accent/50',
      false: '',
    },
    disabled: {
      true: 'pointer-events-none opacity-50',
      false: '',
    },
  },
  defaultVariants: {
    selected: false,
    disabled: false,
  },
})
