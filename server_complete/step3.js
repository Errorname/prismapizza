const { prisma } = require('./prisma-client')
const { GraphQLServer } = require('graphql-yoga')

const resolvers = {
  Query: {
    pizzas: (root, args, context) => context.prisma.pizzas()
  },
  Mutation: {
    createOrder: async (root, args, context) => {
      const user = await context.prisma.user({ id: args.userId })

      const pizzas = await context.prisma.pizzas({
        where: { id_in: args.pizzasIds }
      })

      const total = pizzas.reduce((acc, pizza) => acc + pizza.price, 0)

      const order = await context.prisma.createOrder({
        pizzas: { connect: args.pizzasIds.map(id => ({ id })) },
        total,
        user: { connect: { id: user.id } }
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
