import './gesture-handler';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text } from 'react-native'
// import { StackNavigator } from './src/presentation/routes/StackNavigator';
import { DrawerNavigator } from './src/presentation/routes/DrawerNavigator';
import { BottomTabNavigator } from './src/presentation/routes/BottomTabNavigator.tsx';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <DrawerNavigator />
      {/* <BottomTabNavigator /> */}
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})