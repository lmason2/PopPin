import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Icon} from '@rneui/themed';
import {LeftXTopYColumnContainer} from '../../../shared/containers.styled';
import {LoginInput} from '../../../shared/form.styled';
import {
  BackButton,
  InputContainer,
  InputText,
  MainText,
  SignUpButton,
  SignUpText,
} from '../register/register.styled';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {firebaseAuth} from '../../../config/db';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../App';

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('Welcome', {});
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('sign in error code', errorCode);
        console.log('sign in error message', errorMessage);
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
        <MainText>Welcome Back,</MainText>
        <InputContainer>
          <LoginInput
            textContentType="email"
            onChangeText={(newEmail: React.SetStateAction<string>) =>
              setEmail(newEmail)
            }
            defaultValue={email}
          />
        </InputContainer>
        <InputText>Email</InputText>
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
        <InputText>Password</InputText>
        <SignUpButton onPress={handleLogin}>
          <SignUpText>ENTER</SignUpText>
        </SignUpButton>
      </LeftXTopYColumnContainer>
    </>
  );
};

export default Login;
