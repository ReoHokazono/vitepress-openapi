<script setup lang="ts">
import { computed, defineProps, inject, onBeforeUnmount, onMounted, ref } from 'vue'
import { cn } from '../../../lib/utils'
import { tabsTriggerVariants } from './index'

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
const setActiveTab = inject('setActiveTab', (val: string) => {})
const tabRefs = inject('tabRefs', ref(new Map()))

const el = ref(null)

const isActive = computed(() => activeTab.value === props.value)

function handleClick() {
  setActiveTab(props.value)
}

onMounted(() => {
  if (el.value) {
    tabRefs.value.set(props.value, el.value)
  }
})

onBeforeUnmount(() => {
  tabRefs.value.delete(props.value)
})
</script>

<template>
  <button
    ref="el"
    type="button"
    :class="cn(
      tabsTriggerVariants({ variant: props.variant }),
      isActive ? 'daisy-tab-active' : '',
      props.class,
    )"
    :data-state="isActive ? 'active' : 'inactive'"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
