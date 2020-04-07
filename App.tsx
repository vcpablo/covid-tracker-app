import React from 'react'
import { SafeAreaView } from 'react-native'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import ApolloClient from './lib/apollo'

import HomeScreen from '@/screens/HomeScreen'

export default function App() {
  return (
    <ApolloProvider client={ApolloClient}>
      <ApolloHooksProvider client={ApolloClient}>
        <SafeAreaView style={{ flex: 1 }}>
          <HomeScreen />
        </SafeAreaView>
      </ApolloHooksProvider>
    </ApolloProvider>
  )
}
