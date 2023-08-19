// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import {resolve} from '@feathersjs/schema'
import {Type, getValidator, querySyntax} from '@feathersjs/typebox'
import {ObjectIdSchema} from '@feathersjs/typebox'
import {dataValidator, queryValidator} from '../../validators.js'

// Main data model schema
export const itemsSchema = Type.Object(
    {
        _id: ObjectIdSchema(),
        name: Type.String(),
        price: Type.Number()
    },
    {$id: 'Items', additionalProperties: false}
)
export const itemsValidator = getValidator(itemsSchema, dataValidator)
export const itemsResolver = resolve({})

export const itemsExternalResolver = resolve({})

// Schema for creating new entries
export const itemsDataSchema = Type.Pick(itemsSchema, ['name', 'price'], {
    $id: 'ItemsData'
})
export const itemsDataValidator = getValidator(itemsDataSchema, dataValidator)
export const itemsDataResolver = resolve({})

// Schema for updating existing entries
export const itemsPatchSchema = Type.Partial(itemsSchema, {
    $id: 'ItemsPatch'
})
export const itemsPatchValidator = getValidator(itemsPatchSchema, dataValidator)
export const itemsPatchResolver = resolve({})

// Schema for allowed query properties
export const itemsQueryProperties = Type.Pick(itemsSchema, ['_id', 'name', 'price'])
export const itemsQuerySchema = Type.Intersect(
    [
        querySyntax(itemsQueryProperties),
        // Add additional query properties here
        Type.Object({}, {additionalProperties: false})
    ],
    {additionalProperties: false}
)
export const itemsQueryValidator = getValidator(itemsQuerySchema, queryValidator)
export const itemsQueryResolver = resolve({})
