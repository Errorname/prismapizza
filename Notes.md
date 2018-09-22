# Notes for the talk

## Before

- Verify prisma@1.17
- Set VSCode in light mode
- Checkout `talk-mode` branch
- Open presentation
- Open Prisma Doc

## During

- Start talk
- Show frontend

```bash
mkdir server
cd server

touch docker-compose.yml
# Copy from documentation

docker-compose up

prisma init --endpoint http://localhost:4466

prisma deploy
```

- Show playground
- Add a user
- Complete Datamodel (Pizza, Catalogue, OrderItem, Order)

```bash
prisma deploy
```

- Add pizzas to db

- Add the following to prisma.yml

```yml
generate:
  - generator: javascript-client
    output: ./prisma-client/
```

```bash
npm init -y
npm i prisma-client-lib graphql graphql-yoga
prisma generate
touch index.js
```

- Write index.js to test prisma-client

```js
const { prisma } = require('./prisma-client')

async function main() {
  const pizzas = await prisma.pizzas()
  console.log(pizzas)
}

main()
```

```bash
touch schema.graphql
```

- Write backend schema for listing pizzas
  - Query: pizzas
  - Type: Pizza
- Write backend

```js
const { prisma } = require('./prisma-client')
const { GraphQLServer } = require('graphql-yoga')

const resolvers = {}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma
  }
})
server.start(() => console.log('Server is running on http://localhost:4000'))
```

- Test backend in playground
- Show Frontend Demo code
- Use DemoWithApollo
- Modify Demo to use props.pizza instead of pizzas.json
- Update veggies to 8€
- Delete Hawaian
- Reload demo

- Create Order
- Complete schema with:

  - Mutation: createOrder
  - Type: Order, OrderItem
  - Input: OrderInput, OrderItemInput

- Complete backend
- Test backend in playground
- Modify Demo to sendOrder
- Show order in frontend

- End talk

## After

- Clean tabs in playground
- Clean DB (with /management)
- Stop docker-compose

## Appendix:

### docker-compose.yml

```yml
version: '3'
services:
  prisma:
    image: prismagraphql/prisma:1.16
    restart: always
    ports:
      - '4466:4466'
    environment:
      PRISMA_CONFIG: |
        port: 4466
        databases:
          default:
            connector: postgres
            host: postgres
            port: 5432
            user: prisma
            password: prisma
            migrations: true
  postgres:
    image: postgres:10.5
    restart: always
    environment:
      POSTGRES_USER: prisma
      POSTGRES_PASSWORD: prisma
    volumes:
      - postgres:/var/lib/postgresql/data
volumes: postgres:
```

## server/index.js

```js
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
```
