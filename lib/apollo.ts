import ApolloClient from 'apollo-client'
import AsyncStorage from '@react-native-community/async-storage'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import config from './config'

const httpLink = createHttpLink({
  uri: `${config.API_URL}/graphql`
})

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('@tokaen')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

export default new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})
