/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ModalStackParamList} from '../../../App';
import {NextText} from '../HOME/map/map.styled';
import {ActionButton, AddHostsContainer, LargeLabel} from './event.styled';

const AddFriends = () => {
  const navigation = useNavigation<StackNavigationProp<ModalStackParamList>>();
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <AddHostsContainer>
        <LargeLabel>Great!</LargeLabel>
        <LargeLabel>Now invite friends.</LargeLabel>
        <ActionButton
          onPress={() => {
            navigation.navigate('InviteFriends', {});
          }}>
          <NextText>Next</NextText>
        </ActionButton>
      </AddHostsContainer>
    </SafeAreaView>
  );
};
export default AddFriends;
