import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Primary, Small, White } from './Constant'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleArrowLeft, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
export function Btn() {
  return (
    <TouchableOpacity style={{width:70,height:35,backgroundColor:Primary,borderRadius:7,justifyContent:'space-around',alignItems:'center',flexDirection:'row',shadowOpacity:0.8}}>
        <FontAwesomeIcon icon={faCircleArrowLeft} color={White} size={Small} />
        <Text style={{color:White,fontWeight:700,fontSize:Small}}>Run</Text>
    </TouchableOpacity>
  )
}
export const FillBtn=()=>{
    return(
       <TouchableOpacity style={{height:40,backgroundColor:Primary,borderRadius:7,alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:White,fontWeight:700,fontSize:Small}}>Next</Text>
    </TouchableOpacity> 
    )
}