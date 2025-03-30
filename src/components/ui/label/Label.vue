<!-- Label.vue -->
<script setup lang="ts">
import { cva } from 'class-variance-authority'
import { cn } from '../../../lib/utils'

interface LabelProps {
  for?: string
  required?: boolean
  disabled?: boolean
  class?: string
}

const props = withDefaults(defineProps<LabelProps>(), {
  required: false,
  disabled: false,
})

const labelClasses = cva([
  'daisy-label',
  'text-sm font-medium leading-none',
  'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
], {
  variants: {
    disabled: {
      true: 'cursor-not-allowed opacity-70',
      false: '',
    },
    required: {
      true: 'after:content-["*"] after:text-red-500 after:ml-0.5',
      false: '',
    },
  },
  defaultVariants: {
    disabled: false,
    required: false,
  },
})
</script>

<template>
  <label
    :for="props.for"
    :class="cn(
      labelClasses({
        disabled: props.disabled,
        required: props.required,
      }),
      props.class,
    )"
  >
    <slot />
  </label>
</template>
