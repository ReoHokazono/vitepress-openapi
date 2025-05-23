import type { OpenAPIV3 } from '@scalar/openapi-types'
import type { OpenAPIDocument, OperationObject } from '../../types'

export function generateMissingSummary(spec: OpenAPIDocument): OpenAPIDocument {
  spec.paths = spec.paths || {}

  for (const path of Object.keys(spec.paths)) {
    const pathValue = spec.paths[path] as Record<string, OperationObject>

    for (const verb of Object.keys(pathValue) as OpenAPIV3.HttpMethods[]) {
      const operation = pathValue[verb] as OperationObject

      if (!operation.summary) {
        operation.summary = `${verb.toUpperCase()} ${path}`
      }
    }
  }

  return spec
}
