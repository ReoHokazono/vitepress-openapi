<script setup>
import { computed, defineProps, ref } from 'vue'
import { useTheme } from '../../composables/useTheme'
import OASchemaTabs from '../Schema/OASchemaTabs.vue'
import { Label } from '../ui/label'
import { Select } from '../ui/select'

const props = defineProps({
  operationId: {
    type: String,
    required: true,
  },
  response: {
    type: Object,
    required: true,
  },
  responseCode: {
    type: String,
    required: true,
  },
})

const contentTypes = Object.keys(props.response.content ?? {})

const contentType = ref(contentTypes[0] ?? undefined)

const schema = computed(() => props.response.content?.[contentType.value]?.ui)

const examples = computed(() => props.response.content?.[contentType.value]?.examples)

const contentTypeId = `content-type-${Math.random().toString(36).substring(7)}`

const defaultView = useTheme().getResponseBodyDefaultView()

const options = contentTypes.map(type => ({
  value: type,
  label: type,
}))

// Función para manejar el cambio de contentType
const handleContentTypeChange = (value) => {
  contentType.value = value
}
</script>

<template>
  <div class="flex flex-col space-y-4">
    <span class="text-lg">{{ props.response.description }}</span>

    <div
      v-if="props.response?.content && contentTypes.length"
      class="flex flex-row items-center gap-2 text-xs"
    >
      <Label
        :for="contentTypeId"
        class="flex-shrink-0 text-muted-foreground"
      >
        {{ $t('Content-Type') }}
      </Label>
      <div class="flex-shrink-0">
        <Select
          v-if="contentTypes.length > 1"
          :id="contentTypeId"
          :model-value="contentType"
          :options="options"
          @update:model-value="handleContentTypeChange"
        />
        <span v-else class="h-6 text-xs rounded-md bg-muted px-3 py-1">{{ contentType }}</span>
      </div>
    </div>

    <OASchemaTabs
      v-if="schema"
      :schema="schema"
      :examples="examples"
      :content-type="contentType"
      :default-view="defaultView"
    />
  </div>
</template>
