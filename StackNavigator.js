import * as React from 'react';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import ForgotPsd from '../Screens/ForgotPsd';
import FrontScreen from '../Screens/FrontScreen';
import HomeScreen from '../Screens/HomeScreen'

import{createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack=createStackNavigator();
function MyStack(){
  return(
  <Stack.Navigator screenOptions={{
        headerShown: false
      }}> 
  <Stack.Screen name="FrontScreen" component={FrontScreen}/>
  <Stack.Screen name="LoginScreen" component={LoginScreen}/>
  <Stack.Screen name="SignupScreen" component={SignupScreen}/> 
  <Stack.Screen name="ForgotPsd" component={ForgotPsd}/> 
  <Stack.Screen name="HomeScreen" component={HomeScreen}/>
  </Stack.Navigator>
  );
}
export default MyStack;

  
    
  


