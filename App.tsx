import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {
  AddEmail,
  AddPassword,
  AddUsername,
  SearchColleges,
} from './src/pages/AUTH/register';
import {LoginHome} from './src/pages/AUTH/loginHome';
import Login from './src/pages/AUTH/login';
import Welcome from './src/pages/welcome';
import Home from './src/pages/HOME';

export type RootStackParamList = {
  LoginHome: {};
  Login: {};
  SearchColleges: {};
  AddEmail: {};
  AddPassword: {};
  AddUsername: {};
  Welcome: {};
  Home: {};
};

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginHome" component={LoginHome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SearchColleges" component={SearchColleges} />
        <Stack.Screen name="AddEmail" component={AddEmail} />
        <Stack.Screen name="AddPassword" component={AddPassword} />
        <Stack.Screen name="AddUsername" component={AddUsername} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
