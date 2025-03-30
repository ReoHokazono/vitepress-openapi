<script setup lang="ts">
import { defineProps, provide, ref } from 'vue'
import { cn } from '../../../lib/utils'
import { tabsListVariants } from './index'

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'default',
  },
})

const tabsListRef = ref(null)
provide('tabsListRef', tabsListRef)
</script>

<template>
  <div
    ref="tabsListRef"
    role="tablist"
    :class="cn(tabsListVariants({ variant: props.variant }), props.class)"
  >
    <slot />
  </div>
</template>
