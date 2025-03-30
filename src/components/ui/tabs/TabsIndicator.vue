<script setup lang="ts">
import { defineProps, inject, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { cn } from '../../../lib/utils'
import { tabsIndicatorVariants } from './index'

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

const activeTab = inject('activeTab', ref(''))
const tabsListRef = inject('tabsListRef', ref(null))
const tabRefs = inject('tabRefs', ref(new Map()))

const indicatorStyle = ref({
  width: '0px',
  transform: 'translateX(0px)',
  transition: 'width 250ms ease, transform 250ms ease',
})

function updateIndicator() {
  if (!tabsListRef.value || !activeTab.value || !tabRefs.value.has(activeTab.value)) {
    return
  }

  const activeTabElement = tabRefs.value.get(activeTab.value)
  const tabsListElement = tabsListRef.value

  if (!activeTabElement || !tabsListElement) {
    return
  }

  const tabRect = activeTabElement.getBoundingClientRect()
  const listRect = tabsListElement.getBoundingClientRect()

  // Calcular la posición relativa del tab activo dentro de la lista
  indicatorStyle.value = {
    width: `${tabRect.width}px`,
    transform: `translateX(${tabRect.left - listRect.left}px)`,
    transition: 'width 250ms ease, transform 250ms ease',
  }
}

// Actualizar el indicador cuando cambia el tab activo
watch(activeTab, () => {
  // Pequeño retraso para asegurar que el DOM se ha actualizado
  setTimeout(updateIndicator, 0)
})

onMounted(() => {
  // Inicializar el indicador después de que el componente se monte
  setTimeout(updateIndicator, 0)

  // Actualizar el indicador cuando la ventana cambia de tamaño
  window.addEventListener('resize', updateIndicator)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIndicator)
})
</script>

<template>
  <div
    :class="cn(tabsIndicatorVariants({ variant: props.variant }), props.class)"
    :style="indicatorStyle"
  />
</template>
