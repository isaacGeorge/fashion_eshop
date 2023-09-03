// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators.js'
import {accountsSchema} from "../accounts/accounts.schema.js";

// Main data model schema
export const ordersSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    accountId: Type.String(),
    account: Type.Ref(accountsSchema)
  },
  { $id: 'Orders', additionalProperties: false }
)
export const ordersValidator = getValidator(ordersSchema, dataValidator)
export const ordersResolver = resolve({

    account: virtual(async (order, context)=>{
        return context.app.service('accounts').get(order.accountId)
    })
})

export const ordersExternalResolver = resolve({})

// Schema for creating new entries
export const ordersDataSchema = Type.Pick(ordersSchema, ['accountId'], {
  $id: 'OrdersData'
})
export const ordersDataValidator = getValidator(ordersDataSchema, dataValidator)
export const ordersDataResolver = resolve({})

// Schema for updating existing entries
export const ordersPatchSchema = Type.Partial(ordersSchema, {
  $id: 'OrdersPatch'
})
export const ordersPatchValidator = getValidator(ordersPatchSchema, dataValidator)
export const ordersPatchResolver = resolve({})

// Schema for allowed query properties
export const ordersQueryProperties = Type.Pick(ordersSchema, ['_id', 'text'])
export const ordersQuerySchema = Type.Intersect(
  [
    querySyntax(ordersQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export const ordersQueryValidator = getValidator(ordersQuerySchema, queryValidator)
export const ordersQueryResolver = resolve({})
