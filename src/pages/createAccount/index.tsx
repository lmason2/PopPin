import React from 'react';
import {CreateAccountForm} from '../../components/Login';
import {ImageCenteredXYColumnContainer} from '../../shared/containers.styled';
import {H1, H2} from '../../shared/text.styled';

const CreateAccount = () => {
  return (
    <ImageCenteredXYColumnContainer
      source={require('../../../assets/login-background.jpeg')}>
      <H1>PopPin</H1>
      <CreateAccountForm />
    </ImageCenteredXYColumnContainer>
  );
};

export default CreateAccount;
