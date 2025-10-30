import { View, Text, Image } from 'react-native';
import React from 'react';
import Background from '../components/Background';
import { Small } from '../components/Constant';
import Content from '../components/Content';
export default function Details() {
  return (
    <Background>
      <View>
        <Text style={{ fontSize: Small, fontWeight: 700 }}>Python Basics </Text>
        <Text style={{ fontWeight: 600 }}>By Sanjit</Text>
      </View>
      {/* banner */}
      <View
        style={{ width: '100%', height: 120, marginTop: 15, marginBottom: 30 }}
      >
        <Image source={require('../img/image 5.png')} resizeMode="cover" />
      </View>
      {/* About course */}
      <View style={{marginVertical:10}}>
        <Text style={{ fontSize: Small, fontWeight: 700 }}>About Course</Text>
        <Text style={{ fontSize: 13 }}>
          A Basic Python Course introduces learners to the fundamentals of
          programming using Python, one of the most popular and
          beginner-friendly languages in the world.
        </Text>
      </View>
      {/* course content */}
      <View style={{marginVertical:10}}>
        <Text style={{ fontSize: Small, fontWeight: 700,marginBottom:5 }}>Course Content</Text>
        <Content/>
        <Content/>
        <Content/>
        <Content/>
        <Content/>
        <Content/>
        <Content/>
        <Content/>
        <Content/>
      </View>
    </Background>
  );
}
