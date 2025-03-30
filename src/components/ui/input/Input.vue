<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { InputVariants } from './index'
import { useVModel } from '@vueuse/core'
import { cn } from '../../../lib/utils'
import { inputVariants } from './index'

interface Props {
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
  type?: string
  variant?: InputVariants['variant']
  size?: InputVariants['size']
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  id?: string
  name?: string
  autocomplete?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  variant: 'default',
  size: 'default',
})

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
  (e: 'focus', payload: FocusEvent): void
  (e: 'blur', payload: FocusEvent): void
  (e: 'input', payload: Event): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <input
    :id="id"
    v-model="modelValue"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :required="required"
    :name="name"
    :autocomplete="autocomplete"
    :class="cn(inputVariants({ variant, size }), props.class)"
    @focus="emits('focus', $event)"
    @blur="emits('blur', $event)"
    @input="emits('input', $event)"
  >
</template>
