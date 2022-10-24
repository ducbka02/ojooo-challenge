import { Server, Model, Factory } from 'miragejs'
import { data } from './data'

export const makeServer = ({ environment = 'development' } = {}) => {
  const server = new Server({
    environment,

    models: {
      user: Model,
    },

    factories: {
      user: Factory.extend({
        name() {
          return 'Brian'
        },
        title() {
          return 'title'
        },
      }),
    },

    seeds(s) {
      s.createList('user', 25)
    },

    routes() {
      this.get('/api/questions', () => {
        return data
      })
    },
  })

  return server
}
