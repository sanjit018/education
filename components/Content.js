import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { Grey, Primary, Small, White } from './Constant'

export default function Content() {
  return (
    <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',width:'100%',height:50,backgroundColor:White,alignItems:'center',padding:10,shadowOpacity:0.8,marginVertical:4,borderRadius:10}}>
        <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:Small,fontWeight:700,color:Grey}}>01</Text>
            <Text style={{paddingLeft:20,fontWeight:700}}>Introduction</Text>
        </View>
        <FontAwesomeIcon icon={faCircle} color={Primary} />
    </TouchableOpacity>
  )
}