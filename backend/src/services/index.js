import { items } from './items/items.js'

import { user } from './users/users.js'

export const services = (app) => {
  app.configure(items)

  app.configure(user)

  // All services will be registered here
}
