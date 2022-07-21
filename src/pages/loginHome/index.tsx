import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  LoginHomeButton,
  LoginText,
  RegisterHomeButton,
  RegisterText,
} from '../../components/Login/Login.styled';
import {CenteredXYColumnContainer} from '../../shared/containers.styled';

export const LoginHome = () => {
  const navigation = useNavigation();
  return (
    <CenteredXYColumnContainer>
      <LoginHomeButton>
        <LoginText>Login</LoginText>
      </LoginHomeButton>
      <RegisterHomeButton
        onPress={() => {
          navigation.navigate('AddEmail');
        }}>
        <RegisterText>Register</RegisterText>
      </RegisterHomeButton>
    </CenteredXYColumnContainer>
  );
};
