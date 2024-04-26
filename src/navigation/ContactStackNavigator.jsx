import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Contact from '../screens/Contact';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="get" component={Contact} />
    </Stack.Navigator>
  );
};

export default ContactStackNavigator;
