const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')

const resolvers = {
  Query: {
    pizzas: (root, args, ctx) => ctx.prisma.pizzas()
  },
  Mutation: {
    createOrder: async (root, args, ctx) => {
      const pizzas = await ctx.prisma.pizzas({
        where: { id_in: args.pizzasIds }
      })

      const total = pizzas.reduce((acc, pizza) => acc + pizza.price, 0)

      const order = await ctx.prisma.createOrder({
        pizzas: { connect: args.pizzasIds.map(id => ({ id })) },
        total
      })

      console.log(`Sending mail with order n°${order.id}`)

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
