import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from '../navigation/TabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import AuthStackNavigator from '../navigation/AuthStackNavigator';


const Stack = createStackNavigator()

const Routes = () => {

  const auth = useSelector(state => state.auth)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {auth?.data ? 
        <Stack.Screen name="LoginScreen" component={BottomTabNavigator} options={{headerShown:false}}/>
         : 
        <Stack.Screen name="MainScreen" component={AuthStackNavigator} options={{headerShown:false}}/>}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
