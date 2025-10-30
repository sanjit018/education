import { View, Text, Button } from 'react-native'
import React from 'react'
import Background from '../components/Background'
import {Btn, FillBtn} from '../components/Btn'
import { Dark, Small } from '../components/Constant'

export default function CourseContent() {
  return (
    <Background>
      <Text style={{ fontSize: Small, fontWeight: 700 }}>Python Basics</Text>
      <View style={{marginVertical:15}}>
        <Text style={{ fontSize: Small,color:Dark }}>
          A Basic Python Course introduces learners to the fundamentals of
          programming using Python, one of the most popular and
          beginner-friendly languages in the world.
        </Text>
      </View>
      <View style={{backgroundColor:Dark,width:'100%',height:140,marginVertical:15,borderRadius:15}}>

      </View>
      <View style={{alignItems:'flex-end',width:'100%'}}>
        <Btn />
      </View>
      <View style={{marginTop:20,marginBottom:140}}>
        <Text style={{fontSize:Small,fontWeight:800}}>Output</Text>
        <View style={{backgroundColor:Dark,width:'100%',height:90,marginVertical:15,borderRadius:15}}>

        </View>
      </View>
      <FillBtn />
    </Background>
  );
}