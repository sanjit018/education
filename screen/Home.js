import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import Background from '../components/Background';
import Card from '../components/Card';
import { Course, Dark, Grey, Small, Vedio, White } from '../components/Constant';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faExclamationTriangle, faSearch, faTrailer, faTriangleCircleSquare, faVideo, faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <Background>
      {/* user profile details */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          height: 60,
        }}
      >
        <View style={{ width: '50%', height: 60 }}>
          <Text style={{ fontWeight: 500 }}>Hello</Text>
          <Text style={{ fontWeight: 700 }}>Sanjit Gorai</Text>
        </View>
        <View style={{ width: '50%', height: 60, alignItems: 'flex-end' }}>
          <Image
            source={{
              uri: 'https://thumbs.dreamstime.com/b/animated-duck-skateboarding-colorful-rainbow-fantasy-world-363476312.jpg',
            }}
            style={{ width: 45, height: 45, borderRadius: 30 }}
          />
        </View>
      </View>
      {/* search bar */}
      <TouchableOpacity
        style={{
          backgroundColor: White,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 15,
          elevation: 4,
        }}
      >
        <FontAwesomeIcon icon={faSearch} color={Grey} size={23} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={Grey}
          style={{ width: '90%', color: Dark }}
        />
      </TouchableOpacity>
      {/* banner */}
      <View
        style={{ width: '100%', height: 120, marginTop: 15, marginBottom: 30 }}
      >
        <Image
          source={require('../img/image 5.png')}
          resizeMode="cover"
        />
      </View>
      {/* vedio course */}
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: Small, fontWeight: 700 }}>Vedio Course</Text>
        <FlatList
          horizontal
          data={Vedio}
          renderItem={({ item }) => (
            <View
              style={{ marginHorizontal: 5, marginVertical: 10,justifyContent:'center',alignItems:'center' }}
              key={item.id}
            >
              <FontAwesomeIcon icon={faExclamationTriangle} color={White} size={25} style={{position:'absolute',zIndex:1}}/>
              {item.img}
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
      {/* basic popular course */}
      <View>
        <Text style={{ fontSize: Small, fontWeight: 700 }}>Basic Course</Text>
        <FlatList
          horizontal
          data={Course}
          renderItem={({ item }) => (
              <Card img={item.img} key={item.id} name={item.name} lesson={item.lesson} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      {/* Advance course */}
      <View>
        <Text style={{ fontSize: Small, fontWeight: 700 }}>Advance Course</Text>
        <FlatList
          horizontal
          data={Course}
          renderItem={({ item }) => (
              <Card img={item.img} key={item.id} name={item.name} lesson={item.lesson} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </Background>
  );
}
