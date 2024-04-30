import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../screens/Profile';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="myProfile" component={Profile} options={{ headerShown:false}}/>
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
