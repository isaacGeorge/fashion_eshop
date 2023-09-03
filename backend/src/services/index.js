import { shops } from './shops/shops.js'

import { categories } from './categories/categories.js'

import { orders } from './orders/orders.js'

import { accounts } from './accounts/accounts.js'



import { items } from './items/items.js'

import { user } from './users/users.js'

export const services = (app) => {
  app.configure(shops)

  app.configure(categories)

  app.configure(orders)

  app.configure(accounts)



  app.configure(items)

  app.configure(user)

  // All services will be registered here
}
