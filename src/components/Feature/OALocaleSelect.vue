<script setup>
import VPFlyout from 'vitepress/dist/client/theme-default/components/VPFlyout.vue'
import { computed } from 'vue'
import { useTheme } from '../../composables/useTheme'

const themeConfig = useTheme()

const i18nConfig = themeConfig.getI18nConfig()

const defaultLocale = computed(() => i18nConfig.locale?.value ?? 'en')

const options = computed(() => {
  return i18nConfig.availableLocales.map(locale => ({
    value: locale.code,
    label: locale.label,
  }))
})

function onLocaleChange(locale) {
  themeConfig.setI18nConfig({
    locale,
  })
}
</script>

<template>
  <div class="self-center">
    <VPFlyout
      v-if="options.length"
      class="VPNavBarTranslations"
      icon="vpi-languages"
      :label="$t('Change language')"
    >
      <div class="flex flex-col items-start">
        <button
          v-for="option in options"
          :key="option.value"
          type="button"
          class="option text-muted-foreground hover:text-primary"
          :class="{ 'font-bold': option.value === defaultLocale }"
          @click="onLocaleChange(option.value)"
        >
          {{ option.label }}
        </button>
      </div>
    </VPFlyout>
  </div>
</template>
