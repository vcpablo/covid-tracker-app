import { get } from 'lodash/fp'
import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { View, Text, Button, StyleSheet } from 'react-native'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const AUTHENTICATE = gql`
  mutation($email: String, $password: String) {
    authenticate(email: $email, password: $password) {
      token
      user {
        firstName
        lastName
        email
      }
    }
  }
`

export default function HomeScreen() {
  const [authenticate, { loading, error, data }] = useMutation(AUTHENTICATE)

  const onPress = async () => {
    const response = await authenticate({
      variables: { email: 'vcpablo@gmail.com', password: '123' }
    })

    const token = get('data.authenticate.token', response)

    if (token) {
      await AsyncStorage.setItem('@token', token)
      // navigation.navigate('Home')
    }
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button
        disabled={loading}
        title={loading ? 'Loading' : 'Authenticate'}
        onPress={onPress}
      />
    </View>
  )
}
