# Notes for the talk

## Before

- Verify prisma@1.17
- Set VSCode in light mode
- Set both playground to light modes
- Clean tabs in playground
- Open presentation
- Open Prisma Doc
- Go into "Do Not Disturb" mode
- Delete project in postgres
- Kill both docker instances
- Checkout repo

## During

**Introduction**

- Start talk

  > GraphQL: Language for the communication between the client and the server. There was SOAP, then REST. Now it's GraphQL.

  > Prisma: Application that handles the communication with the BDD. Kind of an ORM. But with Prisma, you talk in GraphQL

- Show frontend

**Init Prisma & DB**

- Copy docker-compose.yml
- Explain docker-compose.yml
- `docker-compose up`
- `prisma init --endpoint http://localhost:4466`

**Create the catalogue**

- Complete Datamodel (Pizza, Catalogue, OrderItem, Order)
- `prisma deploy`
- Add pizzas to db (from json)
- Explain CRUD
- Remove Hawaian

**Write backend schema**

- Copy schema.graphql
- Explain schema.graphql
  > Subset of the large schema

**Create backend**

- Add generator to prisma.yml
- `prisma generate`
- `touch index.js`
- Copy step1.js
- List pizzas
- Set Veggies to 7€

**Add Yoga**

- Copy step2.js
- Explain Yoga
- Write `pizzas` resolver
- Execute in playground
- Show query in frontend
- Execute in frontend

**Complete Yoga**

- Manually create an order in playground
- Write `createOrder` resolver (copy if not enough time)
  - get user by id
  - get pizzas where id_in
  - reduce prices to total
  - createOrder
    - pizzas: { connect: args.ids.map(id => ({id})) }
    - total
    - user: {connect: {id: user.id}}
- Execute in playground
- Show mutation in frontend
- Execute in frontend

**Finish talk**

- But there is more!
- Questions?
