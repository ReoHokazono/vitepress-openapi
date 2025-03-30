<script setup lang="ts">
import { defineEmits, defineProps, onMounted } from 'vue'
import { getPropertyExample } from '../../lib/examples/getPropertyExample'
import { Checkbox } from '../ui/checkbox'
import { Input } from '../ui/input'
import { Select } from '../ui/select'

const props = defineProps({
  parameter: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: [String, Number, Boolean],
    required: true,
  },
})

const emits = defineEmits([
  'update:modelValue',
  'submit',
])

const options = props.parameter.schema?.enum?.map((enumValue: any) => ({
  value: enumValue,
  label: enumValue,
}))

function inputType(parameter: any) {
  if (parameter.schema?.type === 'integer') {
    return 'number'
  }
  if (parameter.schema?.type === 'number') {
    return 'number'
  }
  return 'text'
}

onMounted(() => {
  if (props.parameter.schema?.enum) {
    emits('update:modelValue', getPropertyExample(props.parameter) ?? props.parameter.schema.enum[0])
  }
})

const parameterExample = getPropertyExample(props.parameter)
</script>

<template>
  <div class="flex flex-col space-y-2">
    <Input
      v-if="['string', 'number', 'integer'].includes(parameter.schema?.type) && !parameter.schema?.enum"
      :value="modelValue"
      :type="inputType(parameter)"
      :placeholder="String(parameterExample ?? '')"
      @update:model-value="emits('update:modelValue', $event)"
      @keydown.enter="emits('submit')"
    />

    <Checkbox
      v-if="['boolean'].includes(parameter.schema?.type)"
      :model-value="modelValue === true"
      @update:model-value="emits('update:modelValue', $event)"
      @keydown.enter="emits('submit')"
    />

    <Select
      v-if="parameter.schema?.enum"
      :model-value="String(modelValue)"
      :placeholder="String(parameterExample ?? $t('Select...'))"
      :options="options"
      @update:model-value="emits('update:modelValue', $event)"
    />
  </div>
</template>
