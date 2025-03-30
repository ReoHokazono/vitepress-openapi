<script setup lang="ts">
import { defineEmits, defineProps, provide, ref } from 'vue'
import { cn } from '../../../lib/utils'

const props = defineProps({
  defaultValue: {
    type: String,
    default: undefined,
  },
  value: {
    type: String,
    default: undefined,
  },
  class: {
    type: String,
    default: '',
  },
})

const emits = defineEmits(['update:value'])

const activeTab = ref(props.value || props.defaultValue)
const tabRefs = ref(new Map())

// Proporcionar el valor activo y la función para cambiarlo a los componentes hijos
provide('activeTab', activeTab)
provide('tabRefs', tabRefs)
provide('setActiveTab', (value: string) => {
  activeTab.value = value
  emits('update:value', value)
})
</script>

<template>
  <div :class="cn('', props.class)">
    <slot />
  </div>
</template>
