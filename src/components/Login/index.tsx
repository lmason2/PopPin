import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {LoginInput} from '../../shared/form.styled';
import {Icon} from '@rneui/themed';
import {
  BackContainer,
  BoldUnderlinedText,
  CreateContainer,
  ForgotPasswordText,
  InputContainer,
  LoginButton,
} from './Login.styled';
import {
  AbsoluteContainer,
  RightXCenteredYRowContainer,
} from '../../shared/containers.styled';
import {H5} from '../../shared/text.styled';
import {useNavigation} from '@react-navigation/native';

export const LoginForm = () => {
  const [passwordRevealed, setPasswordRevealed] = useState(false);
  const navigation = useNavigation();
  return (
    <>
      <InputContainer>
        <Icon name="mail" color="red" type="ionicon" />
        <LoginInput
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
      </InputContainer>
      <InputContainer>
        <Icon name="ios-lock-closed" color="red" type="ionicon" />
        <LoginInput
          placeholder="Password"
          secureTextEntry={!passwordRevealed}
          textContentType="password"
        />
        <Icon
          name={passwordRevealed ? 'eye-slash' : 'eye'}
          color="red"
          type="font-awesome-5"
          onPress={() => {
            setPasswordRevealed(p => !p);
          }}
        />
      </InputContainer>
      <RightXCenteredYRowContainer>
        <ForgotPasswordText>Forgot my password</ForgotPasswordText>
      </RightXCenteredYRowContainer>
      <RightXCenteredYRowContainer>
        <LoginButton>
          <H5>Login</H5>
          <Icon name="arrow-forward-sharp" color="white" type="ionicon" />
        </LoginButton>
      </RightXCenteredYRowContainer>
      <AbsoluteContainer>
        <CreateContainer>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Create');
            }}>
            <H5>
              Don't have an account?{' '}
              <BoldUnderlinedText>Create</BoldUnderlinedText>
            </H5>
          </TouchableOpacity>
        </CreateContainer>
      </AbsoluteContainer>
    </>
  );
};

export const CreateAccountForm = () => {
  const navigation = useNavigation();
  return (
    <>
      <InputContainer>
        <Icon name="person" color="red" type="ionicon" />
        <LoginInput placeholder="Full Name" textContentType="emailAddress" />
      </InputContainer>
      <InputContainer>
        <Icon name="mail" color="red" type="ionicon" />
        <LoginInput
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
      </InputContainer>
      <InputContainer>
        <Icon name="ios-lock-closed" color="red" type="ionicon" />
        <LoginInput
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
        />
        <Icon name="eye" color="red" type="font-awesome-5" />
      </InputContainer>
      <InputContainer>
        <Icon name="ios-lock-closed" color="red" type="ionicon" />
        <LoginInput
          placeholder="Confirm Password"
          textContentType="emailAddress"
          secureTextEntry={true}
        />
        <Icon name="eye" color="red" type="font-awesome-5" />
      </InputContainer>
      <RightXCenteredYRowContainer>
        <LoginButton>
          <H5>Create Account</H5>
          <Icon name="arrow-forward-sharp" color="white" type="ionicon" />
        </LoginButton>
      </RightXCenteredYRowContainer>
      <AbsoluteContainer>
        <BackContainer>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="arrow-back-sharp" color="white" type="ionicon" />
          </TouchableOpacity>
        </BackContainer>
      </AbsoluteContainer>
    </>
  );
};
