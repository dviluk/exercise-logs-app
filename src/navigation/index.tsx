import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HelloWorldScreen} from 'screens';

const Stack = createNativeStackNavigator<Navigation.ParamList>();
const StackNavigator = Stack.Navigator;
const StackScreen = Stack.Screen;

export default function Navigation() {
  return (
    <NavigationContainer>
      <StackNavigator
        initialRouteName="APP.HOME"
        screenOptions={{headerShown: false}}>
        <StackScreen name="APP.HOME" component={HelloWorldScreen} />
      </StackNavigator>
    </NavigationContainer>
  );
}
