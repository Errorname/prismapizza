import React, { Fragment } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider, Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import Demo from './Demo'
import { SuccessOrder } from './Notification'

const client = new ApolloClient({
  uri: 'http://localhost:4000'
})

const GET_PIZZAS = gql`
  query {
    pizzas {
      id
      name
      description
      img
      price
    }
  }
`

const CREATE_ORDER = gql`
  mutation($pizzasIds: [ID!]!) {
    createOrder(pizzasIds: $pizzasIds) {
      id
    }
  }
`

const DemoWithApollo = props => (
  <ApolloProvider client={client}>
    <Query query={GET_PIZZAS}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! Message: ${error}`

        return (
          <Mutation mutation={CREATE_ORDER}>
            {(createOrder, { data: response }) => (
              <Fragment>
                <Demo
                  pizzas={data.pizzas}
                  createOrder={createOrder}
                  withApollo={true}
                  {...props}
                />
                {response && <SuccessOrder {...response.createOrder} />}
              </Fragment>
            )}
          </Mutation>
        )
      }}
    </Query>
  </ApolloProvider>
)

export default DemoWithApollo
