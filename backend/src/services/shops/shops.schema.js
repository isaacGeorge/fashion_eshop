// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const shopsSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    text: Type.String()
  },
  { $id: 'Shops', additionalProperties: false }
)
export const shopsValidator = getValidator(shopsSchema, dataValidator)
export const shopsResolver = resolve({})

export const shopsExternalResolver = resolve({})

// Schema for creating new entries
export const shopsDataSchema = Type.Pick(shopsSchema, ['text'], {
  $id: 'ShopsData'
})
export const shopsDataValidator = getValidator(shopsDataSchema, dataValidator)
export const shopsDataResolver = resolve({})

// Schema for updating existing entries
export const shopsPatchSchema = Type.Partial(shopsSchema, {
  $id: 'ShopsPatch'
})
export const shopsPatchValidator = getValidator(shopsPatchSchema, dataValidator)
export const shopsPatchResolver = resolve({})

// Schema for allowed query properties
export const shopsQueryProperties = Type.Pick(shopsSchema, ['_id', 'text'])
export const shopsQuerySchema = Type.Intersect(
  [
    querySyntax(shopsQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export const shopsQueryValidator = getValidator(shopsQuerySchema, queryValidator)
export const shopsQueryResolver = resolve({})
