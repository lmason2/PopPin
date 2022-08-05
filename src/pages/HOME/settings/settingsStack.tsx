import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Settings from '.';
import About from './about';
import HelpContact from './helpContact';

export type SettingsStackParamList = {
  SettingsHome: {};
  HelpContact: {};
  About: {};
};

const Stack = createNativeStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SettingsHome" component={Settings} />
      <Stack.Screen name="HelpContact" component={HelpContact} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
