/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Icon} from '@rneui/themed';
import React from 'react';
import {
  CenteredXTopYColumnContainer,
  LeftXTopYColumnContainer,
} from '../../../shared/containers.styled';
import {BackButton} from '../../AUTH/register/register.styled';
import {
  CenteredSettingsRow,
  HR,
  NoMarginSettingsText,
  SettingsModal,
} from '../home.styled';
import {SettingsStackParamList} from './settingsStack';

const About = () => {
  const navigation =
    useNavigation<StackNavigationProp<SettingsStackParamList>>();
  return (
    <LeftXTopYColumnContainer style={{marginTop: 10}}>
      <BackButton
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="arrow-left-top" color="black" type="material-community" />
      </BackButton>
      <CenteredXTopYColumnContainer>
        <SettingsModal>
          <CenteredSettingsRow
            onPress={() => {
              console.log('terms');
            }}>
            <NoMarginSettingsText>TERMS AND SERVICES</NoMarginSettingsText>
          </CenteredSettingsRow>
          <HR />
          <CenteredSettingsRow
            onPress={() => {
              console.log('privacy');
            }}>
            <NoMarginSettingsText>PRIVACY POLICY</NoMarginSettingsText>
          </CenteredSettingsRow>
        </SettingsModal>
      </CenteredXTopYColumnContainer>
    </LeftXTopYColumnContainer>
  );
};

export default About;
