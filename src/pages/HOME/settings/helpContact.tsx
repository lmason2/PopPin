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

const HelpContact = () => {
  const navigation =
    useNavigation<StackNavigationProp<SettingsStackParamList>>();
  return (
    <LeftXTopYColumnContainer>
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
              console.log('contact');
            }}>
            <NoMarginSettingsText>CONTACT US</NoMarginSettingsText>
          </CenteredSettingsRow>
          <HR />
          <CenteredSettingsRow
            onPress={() => {
              console.log('faq');
            }}>
            <NoMarginSettingsText>FAQ</NoMarginSettingsText>
          </CenteredSettingsRow>
        </SettingsModal>
      </CenteredXTopYColumnContainer>
    </LeftXTopYColumnContainer>
  );
};

export default HelpContact;
