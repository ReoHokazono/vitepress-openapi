<!-- Select.vue -->
<script setup lang="ts">
import { cva } from 'class-variance-authority'
import { cn } from '../../../lib/utils'

interface SelectProps {
  modelValue?: string | number | null
  placeholder?: string
  disabled?: boolean
  required?: boolean
  name?: string
  id?: string
  class?: string
  options?: Array<{ value: string | number, label: string, disabled?: boolean }>
}

const props = withDefaults(defineProps<SelectProps>(), {
  modelValue: null,
  placeholder: 'Select an option',
  disabled: false,
  required: false,
  options: () => [],
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number | null]
  'change': [value: string | number | null]
}>()

const selectClasses = cva([
  'daisy-select w-full',
  'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  'bg-muted h-10 min-h-10',
], {
  variants: {
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: '',
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  const value = target.value === '' ? null : target.value

  emit('update:modelValue', value)
  emit('change', value)
}
</script>

<template>
  <select
    :id="id"
    :name="name"
    :value="modelValue"
    :disabled="disabled"
    :required="required"
    :class="cn(selectClasses({ disabled }), props.class)"
    @change="handleChange"
  >
    <option
      v-if="placeholder && !modelValue"
      value=""
      disabled
      selected
    >
      {{ placeholder }}
    </option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      :disabled="option.disabled"
    >
      {{ option.label }}
    </option>
    <slot />
  </select>
</template>
