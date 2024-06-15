import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Popular from '../screens/Popular';
import SearchResult from '../screens/SearchResult';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

export default function MainStackNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} options={{ headerShown:false}}/>
      <Stack.Screen name="Detail" component={Detail} options={{ headerShown:false}}/>
      <Stack.Screen name="Popular" component={Popular} options={{ headerShown:false}}/>
      <Stack.Screen name="Search" component={SearchResult} options={{ headerShown:false}}/>
    </Stack.Navigator>
  );
}
