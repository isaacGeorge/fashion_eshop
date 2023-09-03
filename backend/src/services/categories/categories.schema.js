// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import {resolve, virtual} from '@feathersjs/schema'
import {Type, getValidator, querySyntax} from '@feathersjs/typebox'
import {ObjectIdSchema} from '@feathersjs/typebox'
import {dataValidator, queryValidator} from '../../validators.js'

// Main data model schema
export const categoriesSchema = Type.Object(
    {
        _id: ObjectIdSchema(),
        name: Type.String(),
        itemIds: Type.Array(ObjectIdSchema())
    },
    {$id: 'Categories', additionalProperties: false}
)
export const categoriesValidator = getValidator(categoriesSchema, dataValidator)
export const categoriesResolver = resolve({
    items: virtual(async (category, context)=>{
        const {data} = await context.app.service('items').find({
            query: {
                _id: {$in: category.itemIds || []}
            }
        })
        return data
    })
})

export const categoriesExternalResolver = resolve({})

// Schema for creating new entries
export const categoriesDataSchema = Type.Pick(categoriesSchema, ['name', 'itemIds'], {
    $id: 'CategoriesData'
})
export const categoriesDataValidator = getValidator(categoriesDataSchema, dataValidator)
export const categoriesDataResolver = resolve({})

// Schema for updating existing entries
export const categoriesPatchSchema = Type.Partial(categoriesSchema, {
    $id: 'CategoriesPatch'
})
export const categoriesPatchValidator = getValidator(categoriesPatchSchema, dataValidator)
export const categoriesPatchResolver = resolve({})

// Schema for allowed query properties
export const categoriesQueryProperties = Type.Pick(categoriesSchema, ['_id', 'name'])
export const categoriesQuerySchema = Type.Intersect(
    [
        querySyntax(categoriesQueryProperties),
        // Add additional query properties here
        Type.Object({}, {additionalProperties: false})
    ],
    {additionalProperties: false}
)
export const categoriesQueryValidator = getValidator(categoriesQuerySchema, queryValidator)
export const categoriesQueryResolver = resolve({})
