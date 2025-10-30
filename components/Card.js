import { View, Text } from 'react-native'
import React from 'react'
import { Grey, White } from './Constant'
export default function Card({img,name,lesson}) {
  return (
    <View style={{width:170,height:140,backgroundColor:White,elevation:4,marginHorizontal:5,marginVertical:10}}>
      {img}
      <Text style={{fontSize:14,fontWeight:500,marginLeft:10}}>{name}</Text>
      <Text style={{fontSize:11,fontWeight:500,marginLeft:10,color:Grey}}>{lesson}</Text>
    </View>
  )
}