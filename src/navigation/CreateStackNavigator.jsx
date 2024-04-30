import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Create from '../screens/Create';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const CreateStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Add" component={Create} options={{ headerShown:false}}/>
    </Stack.Navigator>
  );
};

export default CreateStackNavigator;
