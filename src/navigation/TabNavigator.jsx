import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MainStackNavigator from './StackNavigator';

import ContactStackNavigator from './ContactStackNavigator';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={MainStackNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Create Menu" component={MainStackNavigator} />
      <Tab.Screen name="Profile" component={ContactStackNavigator} />
      <Tab.Screen name="Contact" component={ContactStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
