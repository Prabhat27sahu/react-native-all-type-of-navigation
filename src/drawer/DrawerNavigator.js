import { View, Text } from 'react-native'
import React from 'react'
import Main from './Main'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
   <Drawer.Navigator>
    <Drawer.Screen name="Main" component={Main} options={{headerShown:true}}/>
   </Drawer.Navigator>
  )
}

export default DrawerNavigator