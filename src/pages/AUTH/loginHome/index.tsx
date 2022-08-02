import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {RootStackParamList} from '../../../../App';
import {
  LoginHomeButton,
  LoginText,
  RegisterHomeButton,
  RegisterText,
} from '../../../components/login/login.styled';
import {CenteredXYColumnContainer} from '../../../shared/containers.styled';

export const LoginHome = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <CenteredXYColumnContainer>
      <LoginHomeButton
        onPress={() => {
          navigation.navigate('Login', {});
        }}>
        <LoginText>Login</LoginText>
      </LoginHomeButton>
      <RegisterHomeButton
        onPress={() => {
          navigation.navigate('SearchColleges', {});
        }}>
        <RegisterText>Register</RegisterText>
      </RegisterHomeButton>
    </CenteredXYColumnContainer>
  );
};
