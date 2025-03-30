<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import { computed } from 'vue'
import { cn } from '../../../lib/utils'
import { checkboxClasses } from './index'

interface CheckboxProps {
  modelValue?: boolean
  disabled?: boolean
  required?: boolean
  name?: string
  value?: string
  id?: string
  class?: string
}

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  disabled: false,
  required: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'change': [event: Event]
}>()

const isChecked = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value),
})

const handleChange = (event: Event) => {
  if (props.disabled) {
    return
  }

  const target = event.target as HTMLInputElement
  isChecked.value = target.checked
  emit('change', event)
}
</script>

<template>
  <div class="relative inline-flex items-center">
    <input
      :id="id"
      type="checkbox"
      :name="name"
      :value="value"
      :checked="isChecked"
      :disabled="disabled"
      :required="required"
      class="absolute opacity-0 w-0 h-0"
      @change="handleChange"
    >
    <label
      :for="id"
      :class="cn(
        checkboxClasses({ checked: isChecked }),
        props.class,
      )"
      @click="!disabled && (isChecked = !isChecked)"
    >
      <span
        v-if="isChecked"
        class="flex h-full w-full items-center justify-center text-current"
      >
        <slot>
          <Check class="h-4 w-4" />
        </slot>
      </span>
    </label>
  </div>
</template>
