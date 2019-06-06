# Notes for the talk

## Before

- Verify prisma@1.34
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

  - Tell a story:

    - During my internship, I had to build a tool to encourage communication inside the company. It's called FAQ, for Frequently Asked Questions.
    - But as soon as I arrived at the company and started talking with my coworkers, I stumbled upon a problem: They didn't want it. They said it was "Yet another tool".
    - And so I accepted this challenge and did my best to prove them wrong: this tool was gonna be great, and they needed it.
    - So when I started building this application, I needed to focus on the features and not on the boilerplate stuff.
    - And that's where Prisma comes to help!

  - Recap:

    - But, before I start talking with Prisma, let's do a quick introduction to GraphQL. Does some of you know GraphQL? (If you don't, no problem, you will understand quickly!)
    - So, GraphQL is a language for the communication between the client and the server. There was SOAP, then REST. Now it's GraphQL.
    - Where REST can be seen as a collection of documents (for example, in a social network app, each user would be a document, each post would be a document) and sometimes, there would be links between these documents could be as an array of ids or URLs.
    - In opposition, with GraphQL, we think about relations between entities. We look at how users entities are connected to other users. And how users are linked to posts entities.
    - What does it mean in practice?
    - Let's do a simple feature: In our fictional social network, we would want to have a page, where we show the name of a user, its posts, and its three latest followers.
    - This is how we would do it in REST:
      - First, we have to make a query to the user endpoint, to retrieve all the user's data.
      - Then, we have to make a second query to the post endpoint, to retrieve all of its posts.
      - Finally, we have to make a third query to retrieve all of its followers.
      - But this isn't finished! In the frontend, we still have to assemble this data! And only keep the data we need.
    - In comparaison, this is how we would do it in GraphQL:
      - We write a GraphQL query specifying exactly what we need: a user with its name, the titles of its posts, and the name of its three latest follower.
      - And that's exactly what we will receive! No more, no less. In only one query!
      - There is more great stuff about GraphQL, but let's keep that for another talk.

  - Prisma

    - Let's jump onto Prisma. What's Prisma? It's an application that handles the communication with the database. It replaces traditional ORMs with a simplified & type-safe database access.
    - Let's see where we put it in our architecture:

      - First here is our frontend. It needs to communicate with the server. To do that, we will use GraphQL.
      - The server, that's where all of our business logic is gonna be. But we still need to access the data.
      - And that's where Prisma comes in play. It's gonna add a layer of abstraction to our database. Our server is gonna communicate only with Prisma with create, read, update and delete operations using GraphQL.
      - As you can see, there is two GraphQL interfaces. One between the client and the server for the business logic, and one between the server and Prisma for basic CRUD operations.

    - In this talk, I want to show you how quick you can create a GraphQL backend for an application. To do that, I'll take as example a Pizza ordering application, kind of like Domino's or Papa John's.

- Show frontend

**Init Prisma & DB**

- `prisma init`
- Choose `new database`, `PostgreSQL` and `Javascript`
  - I'm gonna ask it to generate a JS file to have a simplified access to Prisma.
- Explain docker-compose.yml, datamodel.prisma and prisma.yml
- In docker-compose.yml, explain security (and set `rawAccess: false`)
- `docker-compose up`

**Create the catalogue**

- The datamopdel is where we define all the models that the database will hold.
- And Prisma is gonna use this to generate the CRUD operations.
- Copy datamodel
- `prisma deploy`
- Show Playground
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
- Now, we finished the setup of prisma. Let's write our server!

**Create backend**

- `prisma generate` <=== !!!
- `touch index.js`
- Copy **step1.js**
- List pizzas
- Set Veggies to 8.5€
- If we go back to our architecture schema... Here is where we are at: we setup Prisma. And then we connected our backend to it. What's left for us to do is:
- Build the GraphQL interface of our server and connect the client to it.

**Write backend schema**

- Copy schema.graphql
- Explain schema.graphql
  > Schema for the business logic / Subset of the large schema

**Add Yoga**

- Copy **step2.js**
- Explain Yoga
- Write `pizzas` resolver
- `node index.js` <=== !!!
- Show query in frontend
- Connect frontend
- Execute in frontend

**Complete Yoga**

- Copy **step3.js**
- Rerun `node index.js`
- Execute in frontend
- And that's it! We just wrote our backend in less than half an hour.

**Finish talk**

- But there is more!
- Questions?
- If you want to change my mind about Hawaian pizza, I'm here until tomorrow, so we can share one and talk about GraphQL if you wish!
