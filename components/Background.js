import { View, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import {Back, White} from './Constant'
export default function Background({children}) {
  return (
    <View style={{ flex: 1, backgroundColor: Back,padding:15 }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Back} />
      <ScrollView horizontal={false}>
      {children}

      </ScrollView>
    </View>
  );
}