import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';
const userA = <Icon name="user-circle" />;
const userIA = <Icon name="user-alt" />;

import HomeScreen from './assets/Screens/HomeScreen';
import LeaderboardScreen from './assets/Screens/LeaderboardScreen';
import LeaguesScreen from './assets/Screens/LeaguesScreen';
import ResearchScreen from './assets/Screens/ResearchScreen';
import ProfileScreen from './assets/Screens/ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#6231AD"
        inactiveColor="#B5C0C8"
        barStyle={{}}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused, color }) => (
              <Icon name={'home'} color={color} style={{}} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Leagues"
          component={LeaguesScreen}
          options={{
            tabBarLabel: 'Leagues',
            tabBarIcon: ({ focused, color }) => (
              <Icon name={'trophy'} color={color} style={{}} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Research"
          component={ResearchScreen}
          options={{
            tabBarLabel: 'Research',
            tabBarIcon: ({ focused, color }) => (
              <Icon name={'search'} color={color} style={{}} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Leaderboard"
          component={LeaderboardScreen}
          options={{
            tabBarLabel: 'Leaderboard',
            tabBarIcon: ({ focused, color }) => (
              <Icon name={'chart-bar'} color={color} style={{}} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ focused, color }) => (
              <Icon name={'user-alt'} color={color} style={{}} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
