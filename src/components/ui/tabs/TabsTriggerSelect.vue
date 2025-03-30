<script setup lang="ts">
import { computed, defineProps, inject, ref } from 'vue'
import { cn } from '../../../lib/utils'
import { tabsTriggerSelectVariants } from './index'

const props = defineProps({
  options: {
    type: Array,
    required: true,
    validator: (value: any[]) => {
      return value.every(item =>
        (typeof item === 'string')
        || (typeof item === 'object' && 'value' in item && 'label' in item),
      )
    },
  },
  class: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'default',
  },
  placeholder: {
    type: String,
    default: 'Select...',
  },
})

const activeTab = inject('activeTab', ref(''))
const setActiveTab = inject('setActiveTab', (val: string) => {})

function handleChange(event: Event) {
  const select = event.target as HTMLSelectElement
  setActiveTab(select.value)
}

// Normaliza las opciones para tener un formato consistente
const normalizedOptions = computed(() => {
  return props.options.map((option) => {
    if (typeof option === 'string') {
      return { value: option, label: option }
    }
    return option
  })
})
</script>

<template>
  <div class="relative">
    <select
      :value="activeTab"
      :class="cn(tabsTriggerSelectVariants({ variant: props.variant }), props.class)"
      @change="handleChange"
    >
      <option v-if="!activeTab" value="" disabled selected>
        {{ placeholder }}
      </option>
      <option
        v-for="option in normalizedOptions"
        :key="option.value"
        :value="option.value"
        :selected="activeTab === option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>
