import React, { useMemo, useContext } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  HttpLink,
} from '@apollo/client'
import AuthContext from 'contexts/AuthContext'

const Apollo: React.FC = ({ children }) => {
  const { jwt } = useContext(AuthContext)

  const client = useMemo(() => {
    const authMiddleware = new ApolloLink((operation, forward) => {
      if (jwt) {
        operation.setContext({
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        })
      }
      return forward(operation)
    })

    const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_URL })

    const apolloClient = new ApolloClient({
      cache: new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {},
          },
        },
      }),
      link: ApolloLink.from([authMiddleware, httpLink]),
    })

    return apolloClient
  }, [jwt])

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default Apollo
