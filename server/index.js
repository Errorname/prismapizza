const { prisma } = require('./prisma-client')
const { GraphQLServer } = require('graphql-yoga')

const resolvers = {
  Query: {
    pizzas: (root, args, context) => context.prisma.pizzas()
  },
  Mutation: {
    createOrder: async (root, args, context) => {
      const user = await context.prisma.user({ id: args.userId })

      const prices = args.items.map(async item => {
        const pizza = await context.prisma.pizza({ id: item.pizzaId })
        return pizza.price * item.count
      })
      const total = (await Promise.all(prices)).reduce((acc, p) => acc + p, 0)

      const items = args.items.map(item => ({
        pizza: { connect: { id: item.pizzaId } },
        count: item.count
      }))

      const order = await context.prisma.createOrder({
        items: { create: items },
        total
      })

      console.log(`Sending mail to ${user.name} with order n°${order.id}`)

      return order
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma
  }
})
server.start(() => console.log('Server is running on http://localhost:4000'))
