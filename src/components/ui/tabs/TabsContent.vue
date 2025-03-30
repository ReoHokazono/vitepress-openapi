<script setup lang="ts">
import { computed, defineProps, inject, ref } from 'vue'
import { cn } from '../../../lib/utils'
import { tabsContentVariants } from './index'

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'default',
  },
})

const activeTab = inject('activeTab', ref(''))

const isActive = computed(() => activeTab.value === props.value)
</script>

<template>
  <div
    v-if="isActive"
    role="tabpanel"
    :class="cn(tabsContentVariants({ variant: props.variant }), props.class)"
    :data-state="isActive ? 'active' : 'inactive'"
  >
    <slot />
  </div>
</template>
