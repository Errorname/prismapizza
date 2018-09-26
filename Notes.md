# Notes for the talk

## Before

- Verify prisma@1.17
- Set VSCode in light mode
- Set both playground to light modes
- Clean tabs in playground
- Open presentation
- Open Prisma Doc
- Go into "Do Not Disturb" mode
- Delete comments from step1.js
- Reset userId from DemoWithApollo.jsx
- Use Demo.jsx
- Delete project in postgres
- Kill both docker instances
- Checkout repo

## During

**Introduction**

- Start talk
- Show frontend

**Init Prisma & DB**

- Copy docker-compose.yml
- Explain docker-compose.yml
- `docker-compose up`
- `prisma init --endpoint http://localhost:4466`
- `prisma deploy`
- Show playground
- Add a user

**Create the catalogue**

- Complete Datamodel (Pizza, Catalogue, OrderItem, Order)
- `prisma deploy`
- Add pizzas to db (from json)
- Explain CRUD
- Remove Hawaian
- Set Veggies to 8€

**Write backend schema**

- Copy schema.graphql
- Explain schema.graphql

**Create backend**

- Add generator to prisma.yml
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
