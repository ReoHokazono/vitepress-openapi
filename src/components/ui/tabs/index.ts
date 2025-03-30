import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Tabs } from './Tabs.vue'
export { default as TabsContent } from './TabsContent.vue'
export { default as TabsIndicator } from './TabsIndicator.vue'
export { default as TabsList } from './TabsList.vue'
export { default as TabsTrigger } from './TabsTrigger.vue'
export { default as TabsTriggerSelect } from './TabsTriggerSelect.vue'

export const tabsTriggerVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'data-[state=active]:text-foreground',
        select: 'relative flex w-full',
        schemaTabs: 'data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export const tabsListVariants = cva(
  'flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground relative',
  {
    variants: {
      variant: {
        default: '',
        bordered: 'border border-input',
        underlined: 'border-b border-input',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export const tabsContentVariants = cva(
  'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: '',
        bordered: 'border border-input p-4 rounded-md',
        card: 'bg-card text-card-foreground shadow-sm p-4 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export const tabsIndicatorVariants = cva(
  'absolute bottom-0 left-0 h-[2px] rounded-full transition-all',
  {
    variants: {
      variant: {
        default: 'bg-primary',
        subtle: 'bg-muted-foreground/50',
        accent: 'bg-accent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export const tabsTriggerSelectVariants = cva(
  'daisy-select daisy-select-bordered w-full h-10 bg-muted text-foreground',
  {
    variants: {
      variant: {
        default: '',
        outline: 'border-2',
        ghost: 'border-none bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type TabsTriggerVariants = VariantProps<typeof tabsTriggerVariants>
export type TabsListVariants = VariantProps<typeof tabsListVariants>
export type TabsContentVariants = VariantProps<typeof tabsContentVariants>
export type TabsIndicatorVariants = VariantProps<typeof tabsIndicatorVariants>
export type TabsTriggerSelectVariants = VariantProps<typeof tabsTriggerSelectVariants>
