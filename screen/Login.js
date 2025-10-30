import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { Back, Gradient1, Gradient2, Small, White } from '../components/Constant'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import LinearGradient from 'react-native-linear-gradient';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
export default function Login() {
  return (
    <View style={{flex:1,backgroundColor:Back}}>
      <StatusBar backgroundColor={Back} barStyle={'dark-content'} />
      <Image
        source={require('../img/image 13.png')}
        style={{ width: '100%', height: 220 }}
      />
      <View
        style={{
          height: '80%',
          width: '100%',
          backgroundColor: White,
          position: 'absolute',
          zIndex: 1,
          top: 190,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          flex: 1,
        }}
      >
        <View
          style={{
            height: '50%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 36, textAlign: 'center', fontWeight: 600 }}>
            Welcome to Education App
          </Text>
        </View>
        <View style={{ height: '50%', width: '100%', alignItems: 'center' }}>
          <Text style={{ fontWeight: 700, fontSize: Small,marginBottom:20}}>Login/Signup</Text>
          <TouchableOpacity activeOpacity={0.6}>
            <LinearGradient
              colors={[Gradient1, Gradient2]}
              angle={90}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                paddingHorizontal: 40,
                justifyContent: 'space-around',
                width: '80%',
                alignItems: 'center',
                borderRadius: 10,
              }}
            >
              <FontAwesomeIcon icon={faGoogle} size={20} color={White} />
              <Text style={{ color: White, fontSize: Small, fontWeight: 600 }}>
                Sign in with Google
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}