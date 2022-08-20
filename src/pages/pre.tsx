/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {View} from 'react-native';
import {RootStackParamList} from '../../App';
import {firebaseAuth} from '../config/db';

const Pre = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  firebaseAuth.onAuthStateChanged(user => {
    if (user) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Welcome'}],
        }),
      );
    } else {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'LoginHome'}],
        }),
      );
    }
  });
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}} />
  );
};

export default Pre;
