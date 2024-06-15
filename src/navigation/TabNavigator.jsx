import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainStackNavigator from './StackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreateStackNavigator from './CreateStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import MessageList from '../screens/MessageList';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarShowLabel: false,
    }}
    >
      <Tab.Screen
        name="Main"
        component={MainStackNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="home" color={color} size={40} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen name="Create Menu" component={CreateStackNavigator} 
      options={{
        tabBarIcon: ({focused, color}) => (
          <Ionicons name="add-circle-outline" color={color}
          size={40} />
        ),
        headerShown: false,
      }}
      
      />
      <Tab.Screen name="Message" component={MessageList} options={{ headerShown:false,
      tabBarIcon: ({color}) => (
        <Ionicons name="chatbubble-outline" color={color} size={40} />
      ) ,
    }}
      />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} options={{ headerShown:false,
      tabBarIcon: ({color}) => (
        <Ionicons name="person-outline" color={color} size={40} />
      ) ,}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
