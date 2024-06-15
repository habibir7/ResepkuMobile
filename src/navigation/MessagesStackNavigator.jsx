import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MessageList from '../screens/MessageList';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const MessagesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="ListMessage" component={MessageList} options={{ headerShown:false}}/>
    </Stack.Navigator>
  );
};

export default MessagesStackNavigator;
