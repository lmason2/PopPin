import React from 'react';
import {CreateAccountForm} from '../../components/Login';
import {CenteredXTopYColumnContainer} from '../../shared/containers.styled';

const CreateAccount = () => {
  return (
    <CenteredXTopYColumnContainer>
      <CreateAccountForm />
    </CenteredXTopYColumnContainer>
  );
};

export default CreateAccount;
