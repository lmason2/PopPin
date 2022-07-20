import React, {useState} from 'react';
import {firebaseAuth} from '../../config/db';
import {
  RecaptchaVerifier,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
} from 'firebase/auth';
import {LoginInput} from '../../shared/form.styled';
import {Icon} from '@rneui/themed';
import {
  BackButton,
  MainText,
  InputContainer,
  LoginButton,
  SignUpText,
  SignUpButton,
  InfoText,
} from './Login.styled';
import {
  LeftXTopYColumnContainer,
  RightXCenteredYRowContainer,
} from '../../shared/containers.styled';
import {H5} from '../../shared/text.styled';
import {useNavigation} from '@react-navigation/native';
import {Dimensions} from 'react-native';

export const LoginForm = () => {
  const [passwordRevealed, setPasswordRevealed] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAccountLogin = () => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };
  const navigation = useNavigation();
  return (
    <>
      <InputContainer>
        <Icon name="mail" color="red" type="ionicon" />
        <LoginInput
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          onChangeText={(newEmail: React.SetStateAction<string>) =>
            setEmail(newEmail)
          }
          defaultValue={email}
        />
      </InputContainer>
      <InputContainer>
        <Icon name="ios-lock-closed" color="red" type="ionicon" />
        <LoginInput
          placeholder="Password"
          secureTextEntry={!passwordRevealed}
          textContentType="password"
          onChangeText={(newPassword: React.SetStateAction<string>) =>
            setPassword(newPassword)
          }
          defaultValue={password}
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
        <LoginButton onPress={handleAccountLogin}>
          <H5>Login</H5>
          <Icon name="arrow-forward-sharp" color="white" type="ionicon" />
        </LoginButton>
      </RightXCenteredYRowContainer>
    </>
  );
};

export const CreateAccountForm = () => {
  const signUpStateEnum = {
    code: 'code',
    submit: 'submit',
    create: 'create',
  };
  const navigation = useNavigation();
  const [signUpState, setSignUpState] = useState(signUpStateEnum.code);

  const sendCode = () => {};

  const handleSubmit = () => {
    switch (signUpState) {
      case signUpStateEnum.code:
        sendCode();
        setSignUpState(signUpStateEnum.submit);
        break;
      case signUpStateEnum.submit:
        // submit code
        setSignUpState(signUpStateEnum.create);
        break;
      case signUpStateEnum.create:
        // handle sign in and username creation
        setSignUpState(signUpStateEnum.code);
        break;
      default:
        break;
    }
  };
  const getButtonText = () => {
    switch (signUpState) {
      case signUpStateEnum.code:
        return 'GET CODE';
      case signUpStateEnum.submit:
        return 'SUBMIT CODE';
      case signUpStateEnum.create:
        return 'SIGN UP';
      default:
        break;
    }
  };
  const getMainText = () => {
    switch (signUpState) {
      case signUpStateEnum.code:
        return 'My number is';
      case signUpStateEnum.submit:
        return 'My code is';
      case signUpStateEnum.create:
        return 'Choose a username';
      default:
        break;
    }
  };
  const getInfoText = () => {
    switch (signUpState) {
      case signUpStateEnum.code:
      case signUpStateEnum.submit:
        return 'We will send a verification code over text. Message and data rates may apply.';
      case signUpStateEnum.create:
        return 'By signing up, you agree to the Terms of Service and Privacy Policy.';
      default:
        break;
    }
  };
  return (
    <>
      <LeftXTopYColumnContainer>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-left-top" color="black" type="material-community" />
        </BackButton>
        <MainText>{getMainText()}</MainText>
        <InputContainer>
          <LoginInput />
        </InputContainer>
        <SignUpButton onPress={handleSubmit}>
          <SignUpText>{getButtonText()}</SignUpText>
        </SignUpButton>
        <InfoText>{getInfoText()}</InfoText>
      </LeftXTopYColumnContainer>
    </>
  );
};
