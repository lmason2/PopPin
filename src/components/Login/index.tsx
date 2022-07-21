import React, {useEffect, useRef, useState} from 'react';
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
  InputText,
  SubText,
} from './Login.styled';
import {
  LeftXTopYColumnContainer,
  RightXCenteredYRowContainer,
} from '../../shared/containers.styled';
import {H5} from '../../shared/text.styled';
import {useNavigation} from '@react-navigation/native';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {firebaseAuth} from '../../config/db';

let globalEmail = '';
let globalPassword = '';

export const AddEmail = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  return (
    <>
      <LeftXTopYColumnContainer>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-left-top" color="black" type="material-community" />
        </BackButton>
        <MainText>Enter Email</MainText>
        <InputContainer>
          <LoginInput
            keyboardType="email-address"
            textContentType="emailAddress"
            onChangeText={(newEmail: React.SetStateAction<string>) =>
              setEmail(newEmail)
            }
            defaultValue={email}
          />
        </InputContainer>
        <SignUpButton
          onPress={() => {
            globalEmail = email;
            navigation.navigate('AddPassword');
          }}>
          <SignUpText>ENTER</SignUpText>
        </SignUpButton>
      </LeftXTopYColumnContainer>
    </>
  );
};

export const AddPassword = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <>
      <LeftXTopYColumnContainer>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-left-top" color="black" type="material-community" />
        </BackButton>
        <MainText>Create Password</MainText>
        <SubText>At least 8 characters</SubText>
        <InputContainer>
          <LoginInput
            textContentType="password"
            secureTextEntry={true}
            onChangeText={(newPassword: React.SetStateAction<string>) =>
              setPassword(newPassword)
            }
            defaultValue={password}
          />
        </InputContainer>
        <InputText>New Password</InputText>
        <InputContainer>
          <LoginInput
            textContentType="password"
            secureTextEntry={true}
            onChangeText={(newConfirm: React.SetStateAction<string>) =>
              setConfirmPassword(newConfirm)
            }
            defaultValue={confirmPassword}
          />
        </InputContainer>
        <InputText>Confirm New Password</InputText>
        <SignUpButton
          onPress={() => {
            globalPassword = password;
            navigation.navigate('AddUsername');
          }}>
          <SignUpText>ENTER</SignUpText>
        </SignUpButton>
      </LeftXTopYColumnContainer>
    </>
  );
};

export const AddUsername = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');

  const handleSignUp = () => {
    createUserWithEmailAndPassword(firebaseAuth, globalEmail, globalPassword)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('Map');
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
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
        <MainText>Choose a username</MainText>
        <InputContainer>
          <LoginInput
            onChangeText={(newUsername: React.SetStateAction<string>) =>
              setUsername(newUsername)
            }
            defaultValue={username}
          />
        </InputContainer>
        <SignUpButton onPress={handleSignUp}>
          <SignUpText>SIGN UP</SignUpText>
        </SignUpButton>
        <InfoText>
          By signing up, you agree to the Terms of Service and Privacy Policy.
        </InfoText>
      </LeftXTopYColumnContainer>
    </>
  );
};
/////////////////////////////////////

export const LoginForm = () => {
  const [passwordRevealed, setPasswordRevealed] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAccountLogin = () => {
    // signInWithEmailAndPassword(firebaseAuth, email, password)
    //   .then(userCredential => {
    //     const user = userCredential.user;
    //     console.log(user);
    //   })
    //   .catch(error => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode);
    //     console.log(errorMessage);
    //   });
  };
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
