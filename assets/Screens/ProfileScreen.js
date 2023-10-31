import React from 'react';
import { Text, View, Image, TouchableOpacity, Pressable } from 'react-native';

// icons or images
import logo from '../Images/logo.jpg';
import pfp from '../Images/pfp.jpg';
import coin from '../Images/coin.jpg';
import up from '../Images/up.jpg';
import down from '../Images/down.jpg';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function ProfileScreen() {
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      {/* Heading */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginTop: 10,
        }}
      >
        <Image source={logo} width={20} height={20} />
        <Text> Profile </Text>
        <Icon name="comment-alt" color={'#727682'} size={20} solid />
      </View>

      {/* Middle Part */}
      <View style={{ marginVertical: 20 }}>
        {/* Profile Image */}
        <View style={{ alignItems: 'center' }}>
          <Image
            source={pfp}
            style={{ width: 100, height: 100, borderRadius: 100, alignSelf: 'center' }}
          />
          <TouchableOpacity
            style={{
              top: -30,
              padding: 8,
              borderRadius: 20,
              backgroundColor: 'white',
              alignSelf: 'center',
              right: -30,
              borderWidth: 1,
              borderColor: 'gray',
            }}
            activeOpacity={0.8}
          >
            <Icon name="edit" color={'#727682'} size={15} style={{}} solid />
          </TouchableOpacity>
        </View>
        {/* Profile Text */}
        <View style={{ alignItems: 'center' }}>
          {/* Profile Name */}
          <View>
            <Text>Levi Quackerman</Text>
          </View>

          {/* Points */}
          <View>
            <Text>6000 pts</Text>
          </View>

          {/* Profile Description */}
          <View style={{ width: '85%' }}>
            <Text>
              I’m a software developer that has been in the crypto space since 2012. And I’ve seen
              it grow and falter over a period of time. Really happy to be here!
            </Text>
          </View>

          {/* Logout Button */}
          <View>
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}
              activeOpacity={0.8}
            >
              <Icon
                name="sign-out-alt"
                color={'#727682'}
                size={15}
                style={{ marginRight: 10 }}
                solid
              />
              <Text style={{ fontWeight: 'bold' }}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Stats Box*/}
      <View style={{ alignItems: 'center' }}>
        {/* Coin image */}
        <View>
          <Image source={coin} width={30} height={30} style={{ zIndex: 2 }} />
        </View>
        {/* Stats */}
        <View
          style={{
            zIndex: 1,
            top: -15,
            flexDirection: 'row',
            width: '95%',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'gray',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          {/* Text 1 */}
          <View
            style={{
              flex: 0.45,
              flexDirection: 'column',
              alignContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <View style={{ padding: 10 }}>
              <Text>Under or Over</Text>
            </View>
            <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
              <Image source={up} width={20} height={20} style={{ marginRight: 10 }} />
              <Text>81%</Text>
            </View>
          </View>
          {/* Text 2 */}
          <View
            style={{
              flex: 0.45,
              flexDirection: 'column',
              alignContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <View style={{ padding: 10 }}>
              <Text>Top 5</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                alignItems: 'center',
              }}
            >
              <Image source={down} width={20} height={20} style={{ marginRight: 10 }} />
              <Text>-51%</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
