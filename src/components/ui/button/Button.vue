<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ButtonVariants } from './index'
import { computed } from 'vue'
import { cn } from '../../../lib/utils'
import { buttonVariants } from './index'

interface Props {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  as?: string
  type?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  type: 'button',
})

const emit = defineEmits(['click'])

const Component = computed(() => props.as)
</script>

<template>
  <component
    :is="Component"
    :class="cn(buttonVariants({ variant, size }), props.class)"
    :type="as === 'button' ? type : undefined"
    :disabled="disabled"
    @click="emit('click', $event)"
  >
    <slot />
  </component>
</template>
