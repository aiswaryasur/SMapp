import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MyStack from './Navigations/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';

export default class App extends React.Component{
  render(){
    return(
    <NavigationContainer>
    <MyStack />
    </NavigationContainer>
    );
  }
}
