import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Main from '../../screens/Main'


import BottomTab from './BottomNavigation'

const AppNavigator = () => {
    const Stack = createNativeStackNavigator()


    // Navigations
  return (
    <NavigationContainer>
 <Stack.Navigator>
  <Stack.Screen options={{headerShown:false}} name='Main' component={Main} />
  <Stack.Screen options={{headerShown:false}} name='Home' component={BottomTab} />

    </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default AppNavigator

const styles = StyleSheet.create({})