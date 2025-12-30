import { StatusBar} from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'

const AuthLayout = () => {
  return (
    <>
    <StatusBar style='auto'/>
    <Stack screenOptions={{headerShown:false,animation:'none'}} />

    </>
    
  )
}

export default AuthLayout
