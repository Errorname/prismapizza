# Notes for the talk

## Before

- Verify prisma@1.25
- Set VSCode in light mode
- Set both playground to light modes
- Clean tabs in playground
- Open presentation
- Open Prisma Doc
- Go into "Do Not Disturb" mode
- Make sure frontend isn't connected to backend
- Delete project
  - `prisma delete`
- Clean docker
  - `docker-compose down`
  - `docker rm -f $(docker ps -a -q)`
  - Hard reset: `docker volume rm $(docker volume ls -q)`
- Checkout repo

## During

**Introduction**

- Start talk

  > GraphQL: Language for the communication between the client and the server. There was SOAP, then REST. Now it's GraphQL.

  > Prisma: Application that handles the communication with the BDD. Replaces traditional ORM with a simplified & type-safe database access.

- Show frontend

**Init Prisma & DB**

- `prisma init`
- Choose `new database`, `PostgreSQL` and `Javascript`
- Explain docker-compose.yml, datamodel.prisma and prisma.yml
- `docker-compose up`

**Create the catalogue**

- Complete Datamodel (Pizza, Catalogue, OrderItem, Order)
  - Pizza _(id: ID! @unique, name: String!, description: String!, img: String!, price: Float!)_
  - Catalogue _(pizzas: [Pizza!]!)_
  - Order _(id: ID! @unique, pizzas: [Pizza!]!, total: Float!)_
- `prisma deploy`
- Show playground
- Explain CRUD
- Add pizzas to db (from json)

```graphql
mutation($pizzas: [PizzaCreateInput!]!) {
  createCatalogue(data: { pizzas: { create: $pizzas } }) {
    pizzas {
      name
    }
  }
}
```

- Remove Hawaian
- Set Veggies to 8€

**Write backend schema**

- Copy schema.graphql
- Explain schema.graphql
  > Schema for the business logic / Subset of the large schema

**Create backend**

- Add generator to prisma.yml
- `prisma generate`
- `touch index.js`
- Copy step1.js

```js
const { prisma } = require('./prisma-client')

const main = async () => {
  // Show some pizzas here!
}

main()
```

- List pizzas
- Set Veggies to 7€

**Add Yoga**

- Copy step2.js

```js
const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')

const resolvers = {
  // Write some resolvers here!
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: { prisma }
})
server.start(() => console.log('Server is running on http://localhost:4000'))
```

- Explain Yoga
- Write `pizzas` resolver
  - price_gte: 8.5
- `node index.js`
- Execute in playground
- Show query in frontend
- Execute in frontend

**Complete Yoga**

- Manually create an order in playground
- Write `createOrder` resolver (copy if not enough time)
  - get pizzas where id_in
  - reduce prices to total
  - createOrder
    - pizzas: { connect: args.ids.map(id => ({id})) }
    - total
  - Send mail
  - Return order
- Execute in playground
- Show mutation in frontend
- Execute in frontend

**Finish talk**

- But there is more!
- Questions?
