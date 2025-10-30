import { View, Text, StatusBar, Image } from 'react-native'
import React from 'react'
import {White} from '../components/Constant'
export default function Starter() {
  return (
    <View style={{flex:1,backgroundColor:White,justifyContent:'center',alignItems:'center'}}>
        <StatusBar barStyle={'dark-content'} backgroundColor={White}/>
        <Image source={require("../img/logo.png")} style={{borderRadius:50}} />
    </View>
  )
}