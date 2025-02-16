import type { OpenAPI } from '@scalar/openapi-types'
import type { OpenApi } from '../lib/OpenApi'
import type { PartialUseThemeConfig } from './useTheme'
import { createOpenApiInstance } from '../lib/createOpenApiInstance'
import { useTheme } from './useTheme'

export interface OpenAPIData {
  spec: OpenAPI.Document
  openapi: ReturnType<typeof createOpenApiInstance>
  config?: PartialUseThemeConfig
}

export const OPENAPI_GLOBAL_KEY = Symbol('openapi')

export const OPENAPI_LOCAL_KEY = Symbol('openapiLocal')

let openapi: ReturnType<typeof OpenApi> | null = null

export function useOpenapi({
  spec,
  config,
}: {
  spec?: OpenAPI.Document
  config?: PartialUseThemeConfig
} = {}) {
  if (config) {
    useTheme(config)
  }

  if (spec) {
    setupOpenApi({ spec, config })
  }

  function setupOpenApi({ spec, config }: { spec: OpenAPI.Document, config?: PartialUseThemeConfig }) {
    openapi = createOpenApiInstance({
      spec,
      defaultTag: config?.spec?.defaultTag,
      defaultTagDescription: config?.spec?.defaultTagDescription,
    })
  }

  return {
    ...openapi,
    json: openapi?.spec,
  }
}
