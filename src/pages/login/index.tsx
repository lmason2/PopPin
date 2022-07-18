import React from 'react';
import {LoginForm} from '../../components/Login';
import {ImageCenteredXYColumnContainer} from '../../shared/containers.styled';
import {H1, H2} from '../../shared/text.styled';

const Login = () => {
  return (
    <ImageCenteredXYColumnContainer
      source={require('../../../assets/login-background.jpeg')}>
      <H1>PopPin</H1>
      <H2>Never miss the best nights</H2>
      <LoginForm />
    </ImageCenteredXYColumnContainer>
  );
};

export default Login;
