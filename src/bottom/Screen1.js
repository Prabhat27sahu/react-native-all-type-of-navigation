import { View, Text } from 'react-native'
import React from 'react'

const Screen1 = ({navigation}) => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: '#63BBE1'}}>
      <Text style={{fontSize:20}} onPress={()=>{
        navigation.openDrawer()
      }}>Screen1</Text>
    </View>
  )
}

export default Screen1