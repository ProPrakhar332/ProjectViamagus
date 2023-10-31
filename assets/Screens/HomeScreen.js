import React from 'react';
import {
  Text,
  View,
  Modal,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import bitcoin from '../Images/bitcoin.png';

export default function HomeScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      enabled
    >
      <SafeAreaView
        style={{
          backgroundColor: '#F3F2F7',
          width: '100%',
          // marginTop: 30,
        }}
      >
        <ScrollView
          style={{
            width: '100%',
            alignSelf: 'center',
            backgroundColor: '#F3F2F7',
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Heading */}
          <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Today's Game</Text>
          </View>
          {/* Card */}
          <View style={{ width: '90%', alignSelf: 'center' }}>
            {/* Header */}
            <View
              style={{
                paddingTop: 20,
                paddingHorizontal: 20,
                borderRadius: 10,
                backgroundColor: '#6231AD',
                flexDirection: 'column',
                zIndex: -1,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text
                    style={{ fontSize: 12, fontWeight: '500', color: '#D2BAF5', marginRight: 10 }}
                  >
                    UNDER OR OVER
                  </Text>
                  <Icon
                    name="info-circle"
                    size={14}
                    color={'#D2BAF5'}
                    style={{ alignSelf: 'center' }}
                  />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text
                    style={{ fontSize: 12, fontWeight: '400', color: '#D2BAF5', marginRight: 10 }}
                  >
                    Starting in
                  </Text>
                  <Icon
                    name="clock"
                    size={14}
                    color={'#D2BAF5'}
                    style={{ alignSelf: 'center', marginRight: 10 }}
                    solid
                  />
                  <Text
                    style={{ fontSize: 14, fontWeight: '500', color: '#D2BAF5', marginRight: 10 }}
                  >
                    03:05:12
                  </Text>
                </View>
              </View>
              <View style={{ marginTop: 25, marginBottom: 10, zIndex: 0, paddingBottom: 40 }}>
                <Text style={{ color: '#D2BAF5', fontSize: 14 }}>Bitcoin price will be under</Text>
                <Text style={{ color: '#D2BAF5' }}>
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>$24,524</Text> at 7 a ET on{' '}
                  <Text style={{ color: 'white', fontWeight: '400' }}>22nd Jan’21</Text>
                </Text>
              </View>
            </View>
            <Image
              source={bitcoin}
              style={{
                width: 85 * 1.5,
                height: 48 * 1.5,
                zIndex: 2,
                top: -85,
                paddingBottom: 0,
                alignSelf: 'flex-end',
              }}
            />

            {/* Bid */}
            <View style={{ padding: 20, backgroundColor: 'white', zIndex: -1, top: -85 }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}
              >
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                  <Text style={styles.bidHeading}>PRIZE POOL</Text>
                  <Text style={styles.bidSubHeading}>$12,000</Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                  <Text style={styles.bidHeading}>UNDER</Text>
                  <Text style={styles.bidSubHeading}>3.25x</Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                  <Text style={styles.bidHeading}>OVER</Text>
                  <Text style={styles.bidSubHeading}>1.5x</Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                  <Text style={styles.bidHeading}>ENTRY FEES</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[styles.bidSubHeading, { marginRight: 10 }]}>5</Text>
                    <Icon name="coins" size={16} color={'#FFD600'} solid />
                  </View>
                </View>
              </View>
              <View style={{ marginVertical: 20 }}>
                <Text style={[styles.bidHeading, { fontSize: 14, color: '#727682' }]}>
                  What's your prediction?
                </Text>
                <View
                  style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#452C55',
                      flex: 0.45,
                      flexDirection: 'row',
                      borderRadius: 30,
                      padding: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    activeOpacity={0.7}
                  >
                    <Icon
                      name="arrow-up"
                      size={16}
                      color={'white'}
                      style={{ marginRight: 10 }}
                      solid
                    />
                    <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Under</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#6231AD',
                      flex: 0.45,
                      flexDirection: 'row',
                      borderRadius: 30,
                      padding: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    activeOpacity={0.7}
                  >
                    <Icon
                      name="arrow-down"
                      size={16}
                      color={'white'}
                      style={{ marginRight: 10 }}
                      solid
                    />
                    <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Over</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* Pool */}
            <View
              style={{
                padding: 20,
                backgroundColor: '#EEEAF3',
                zIndex: -1,
                top: -85,
                flexDirection: 'column',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 5,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              {/* Buttons */}
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name="user" size={16} color={'#727682'} style={{ marginRight: 15 }} solid />
                  <Text style={{ color: '#727682', fontSize: 14, fontWeight: 'bold' }}>
                    355 Players
                  </Text>
                </View>

                <TouchableOpacity
                  style={{ flexDirection: 'row', alignItems: 'center' }}
                  activeOpacity={0.7}
                >
                  <Icon
                    name="chart-bar"
                    size={16}
                    color={'#727682'}
                    style={{ marginRight: 15 }}
                    solid
                  />
                  <Text style={{ color: '#727682', fontSize: 14, fontWeight: 'bold' }}>
                    View Chart
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Poll Bar */}
              <View
                style={{
                  marginVertical: 15,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
              >
                <View
                  style={{
                    width: '66%',
                    height: 15,
                    borderBottomLeftRadius: 10,
                    borderTopLeftRadius: 10,
                    backgroundColor: '#FE4190',
                  }}
                ></View>
                <View
                  style={{
                    width: '34%',
                    height: 15,
                    borderBottomRightRadius: 10,
                    borderTopRightRadius: 10,
                    backgroundColor: '#2DABAD',
                  }}
                ></View>
              </View>
              {/* Chart Lablel */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '95%',
                  alignSelf: 'center',
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ color: '#727682', fontSize: 12, fontWeight: '400' }}>
                    232 predicted under
                  </Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ color: '#727682', fontSize: 12, fontWeight: '400' }}>
                    123 predicted over
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2B8ADA',
  },
  bidHeading: { color: '#B5C0C8', fontSize: 12, fontWeight: '500', marginBottom: 4 },
  bidSubHeading: { color: 'black', fontSize: 14, fontWeight: '500' },
});
