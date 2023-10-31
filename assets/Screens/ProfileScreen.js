import * as React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  useWindowDimensions,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';

// icons or images
import logo from '../Images/logo.jpg';
import pfp from '../Images/pfp.jpg';
import coin from '../Images/coin.jpg';
import up from '../Images/up.jpg';
import down from '../Images/down.jpg';
import win from '../Images/win.png';
import loss from '../Images/loss.png';
import list_logo from '../Images/list_logo.jpg';

import Icon from 'react-native-vector-icons/FontAwesome5';

const FirstRoute = () => (
  <View style={{ backgroundColor: 'green' }}>
    <View
      style={{
        height: dataGames.length * 105,
        backgroundColor: '#F6F3FA',
        flexDirection: 'column',
      }}
    >
      {dataGames.map((dataGames, index) => (
        <View
          key={index}
          style={{
            padding: 10,
            backgroundColor: 'white',
            marginTop: 15,
            width: '95%',
            alignSelf: 'center',
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          {/* Image */}
          <View style={{ flex: 0.3, justifyContent: 'center' }}>
            <Image
              source={dataGames.result ? win : loss}
              style={{ width: 60, height: 60, alignSelf: 'center' }}
            />
          </View>
          {/* Middle Text */}
          <View
            style={{
              flex: 0.5,
              margin: 5,
              justifyContent: 'space-between',
            }}
          >
            {/* Heading */}
            <View>
              <Text style={{ fontWeight: '600', color: 'black', marginBottom: 5 }}>
                {dataGames.title}
              </Text>
            </View>
            {/* Description */}
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontWeight: '500', color: '#727682' }}>{dataGames.opponent}</Text>
            </View>
          </View>
          {/* Right Text */}
          <View
            style={{
              flex: 0.2,
              margin: 5,
              justifyContent: 'space-between',
            }}
          >
            {/* Heading */}
            <View>
              <Text style={{ fontWeight: '600', color: 'black', marginBottom: 5 }}>Points</Text>
            </View>
            {/* Description */}
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontWeight: '500', color: !dataGames.result ? 'red' : 'green' }}>
                {dataGames.result ? '+ 150' : '- 150'}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  </View>
);

const SecondRoute = () => (
  <View
    style={{
      height: dataBadges.length * 105,
      backgroundColor: '#F6F3FA',
      flexDirection: 'column',
      marginBottom: 20,
    }}
  >
    {dataBadges.map((dataBadges, index) => (
      <View
        key={index}
        style={{
          padding: 10,
          backgroundColor: 'white',
          marginTop: 15,
          width: '95%',
          alignSelf: 'center',
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        {/* Image */}
        <View style={{ flex: 0.2, justifyContent: 'center' }}>
          <Image source={list_logo} style={{ width: 60, height: 60, alignSelf: 'center' }} />
        </View>
        {/* Text */}
        <View
          style={{
            flex: 0.75,
            margin: 5,
            justifyContent: 'space-between',
          }}
        >
          {/* Heading */}
          <View>
            <Text style={{ fontWeight: '600', color: 'black', marginBottom: 5 }}>
              {dataBadges.title}
            </Text>
          </View>
          {/* Description */}
          <View>
            <Text style={{ fontWeight: '500', color: '#727682' }}>{dataBadges.text}</Text>
          </View>
        </View>
      </View>
    ))}
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const dataBadges = [
  {
    key: 1,
    title: 'First Stripe Earned',
    text: 'Top 10% of highest spending players in a month',
  },
  {
    key: 2,
    title: 'Born Winner',
    text: 'Top 10% of highest spending players in a month',
  },
  {
    key: 3,
    title: 'Trader of the Month',
    text: 'Won 7 under-over games in a row',
  },
  {
    key: 4,
    title: 'Rising Star',
    text: 'Top 10% of highest spending players in a month',
  },
  {
    key: 5,
    title: 'Jackpot',
    text: 'Top 10% of highest spending players in a month',
  },
  {
    key: 6,
    title: 'Impossible',
    text: 'Top 10% of highest spending players in a month',
  },
  {
    key: 7,
    title: 'First Stripe Earned',
    text: 'Top 10% of highest spending players in a month',
  },
];

const dataGames = [
  {
    key: 1,
    title: 'Monopoly',
    result: true,
    opponent: 'Eren Yeager',
    text: 'Top 10% of highest spending players in a month',
  },
  {
    key: 2,
    title: 'Subway Surfer',
    result: true,
    opponent: 'Armin Arlelt',
    text: 'Top 10% of highest spending players in a month',
  },
  {
    key: 3,
    title: 'Clash of Clans',
    result: false,
    opponent: 'Conny Springer',
    text: 'Won 7 under-over games in a row',
  },
  {
    key: 4,
    title: 'Chess',
    result: false,
    opponent: 'Sasha Banks',
    text: 'Top 10% of highest spending players in a month',
  },
  {
    key: 5,
    title: 'The Game of Life',
    result: true,
    opponent: 'Erwin Smith',
    text: 'Top 10% of highest spending players in a month',
  },
];

export default function ProfileScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Games Played' },
    { key: 'second', title: 'Badges' },
  ]);
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#6231AD' }}
      style={{ backgroundColor: 'white', marginTop: 10 }}
      labelStyle={{ color: '#727682', textTransform: 'none', fontWeight: '500' }}
      activeColor="#6231AD"
    />
  );
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
          <View style={{ backgroundColor: '#F3F2F7', flex: 1 }}>
            {/* Heading */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 20,
                paddingVertical: 40,
                backgroundColor: 'white',
              }}
            >
              <Image source={logo} width={20} height={20} />
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Profile </Text>
              <Icon name="comment-alt" color={'#727682'} size={20} solid />
            </View>

            {/* Middle Part */}
            <View
              style={{
                backgroundColor: 'white',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* Profile Image */}
              <View style={{ flexDirection: 'column', flex: 1, align: 'center', paddingTop: 20 }}>
                <Image
                  source={pfp}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 100,
                    alignSelf: 'center',
                  }}
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
                  <Text style={{ fontSize: 18, color: 'black' }}>Levi Quackerman</Text>
                </View>

                {/* Points */}
                <View style={{ paddingVertical: 5 }}>
                  <Text style={{ fontSize: 14, color: '#727682' }}>6000 pts</Text>
                </View>

                {/* Profile Description */}
                <View style={{ width: '85%' }}>
                  <Text style={{ fontSize: 14, color: '#727682', textAlign: 'justify' }}>
                    I’m a software developer that has been in the crypto space since 2012. And I’ve
                    seen it grow and falter over a period of time. Really happy to be here!
                  </Text>
                </View>

                {/* Logout Button */}
                <View>
                  <TouchableOpacity
                    style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}
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
            <View style={{ alignItems: 'center', backgroundColor: 'white' }}>
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
                  borderWidth: 0.5,
                  borderColor: 'gray',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  padding: 10,
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
                    <Text style={{ fontWeight: '600', fontSize: 14, color: '#727682' }}>
                      Under or Over
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
                    <Image source={up} width={20} height={20} style={{ marginRight: 15 }} />
                    <Text style={{ fontWeight: '600', fontSize: 24, color: 'black' }}>81%</Text>
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
                    <Text style={{ fontWeight: '600', fontSize: 14, color: '#727682' }}>Top 5</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 10,
                      alignItems: 'center',
                    }}
                  >
                    <Image source={down} width={20} height={20} style={{ marginRight: 15 }} />
                    <Text style={{ fontWeight: '600', fontSize: 24, color: 'black' }}>-51%</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Tab View */}
            <TabView
              renderTabBar={renderTabBar}
              navigationState={{ index, routes }}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{ width: layout.width }}
              style={{ height: index == 1 ? 120 * dataBadges.length : 110 * dataGames.length }}
            />
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
});
