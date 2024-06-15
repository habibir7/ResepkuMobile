import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../screens/Profile';
import MyResep from '../screens/MyResep';
import Update from '../screens/EditResep';
import Delete from '../screens/DeleteResep';
import UpdateUser from '../screens/EditProfile';

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
      <Stack.Screen name="updateProfile" component={UpdateUser} options={{ headerShown:false}}/>
      <Stack.Screen name="myResep" component={MyResep} options={{ headerShown:false}}/>
      <Stack.Screen name="updateResep" component={Update} options={{ headerShown:false}}/>
      <Stack.Screen name="deleteResep" component={Delete} options={{ headerShown:false}}/>
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
