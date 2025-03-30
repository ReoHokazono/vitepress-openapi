<script setup>
import { Badge } from '../ui/badge'

const props = defineProps({
  method: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <Badge
    variant="plain"
    :class="[`OAMethodBadge--${props.method.toLowerCase()}`]"
  >
    {{ props.method.toUpperCase() }}
  </Badge>
</template>
