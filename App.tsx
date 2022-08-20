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
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Modal from './src/pages/HOME/map/bar';
import NewEvent from './src/pages/EVENT/event';
import Pre from './src/pages/pre';
import AddHosts from './src/pages/EVENT/addHosts';
import InviteHosts from './src/pages/EVENT/inviteHosts';
import AddFriends from './src/pages/EVENT/addFriends';
import InviteFriends from './src/pages/EVENT/inviteFriends';
import EventDetails from './src/pages/EVENT/eventDetails';

export type RootStackParamList = {
  Pre: {};
  LoginHome: {};
  Login: {};
  SearchColleges: {};
  AddEmail: {};
  AddPassword: {};
  AddUsername: {};
  Welcome: {};
  Home: {};
  ModalStack: {};
};

export type ModalStackParamList = {
  EventModal: {};
  Modal: {};
  AddHosts: {};
  InviteHosts: {};
  AddFriends: {};
  InviteFriends: {};
  EventDetails: {};
};

const RootStack = createNativeStackNavigator();
const ModalStack = createNativeStackNavigator();

const ModalStackView = () => (
  <ModalStack.Navigator screenOptions={{headerShown: false}}>
    <ModalStack.Group screenOptions={{presentation: 'modal'}}>
      <ModalStack.Screen name="EventModal" component={NewEvent} />
      <ModalStack.Screen name="Modal" component={Modal} />
    </ModalStack.Group>
    <ModalStack.Group>
      <ModalStack.Screen name="AddHosts" component={AddHosts} />
      <ModalStack.Screen name="InviteHosts" component={InviteHosts} />
      <ModalStack.Screen name="AddFriends" component={AddFriends} />
      <ModalStack.Screen name="InviteFriends" component={InviteFriends} />
      <ModalStack.Screen name="EventDetails" component={EventDetails} />
    </ModalStack.Group>
  </ModalStack.Navigator>
);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          <RootStack.Group>
            <RootStack.Screen name="Pre Screen" component={Pre} />
            <RootStack.Screen
              name="LoginHome"
              component={LoginHome}
              options={{animation: 'slide_from_bottom'}}
            />
            <RootStack.Screen name="Login" component={Login} />
            <RootStack.Screen
              name="SearchColleges"
              component={SearchColleges}
            />
            <RootStack.Screen name="AddEmail" component={AddEmail} />
            <RootStack.Screen name="AddPassword" component={AddPassword} />
            <RootStack.Screen name="AddUsername" component={AddUsername} />
            <RootStack.Screen
              name="Welcome"
              component={Welcome}
              options={{animation: 'none'}}
            />
            <RootStack.Screen
              name="ModalStack"
              component={ModalStackView}
              options={{
                presentation: 'modal',
              }}
            />
            <RootStack.Screen name="Home" component={Home} />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
