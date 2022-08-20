/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ModalStackParamList} from '../../../App';
import {NextText} from '../HOME/map/map.styled';
import {
  ActionButton,
  AddHostsContainer,
  LargeLabel,
  SmallLabel,
} from './event.styled';

const AddHosts = () => {
  const navigation = useNavigation<StackNavigationProp<ModalStackParamList>>();
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <AddHostsContainer>
        <LargeLabel>Add Host(s)?</LargeLabel>
        <SmallLabel>Add an additional host to this event.</SmallLabel>
        <ActionButton
          onPress={() => {
            navigation.navigate('AddFriends', {});
          }}>
          <NextText>Yes</NextText>
        </ActionButton>
        <ActionButton>
          <NextText>No</NextText>
        </ActionButton>
      </AddHostsContainer>
    </SafeAreaView>
  );
};
export default AddHosts;
