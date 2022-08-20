import {Icon} from '@rneui/themed';
import {getAuth, signOut} from 'firebase/auth';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from '../../../shared/styles';
import {ButtonContainer, LogoutOverlayContainer} from '../home.styled';

const LogoutOverlay = () => {
  return (
    <LogoutOverlayContainer>
      <ButtonContainer>
        <TouchableOpacity
          onPress={() => {
            const auth = getAuth();
            signOut(auth)
              .then(() => {
                // Sign-out successful.
              })
              .catch(error => {
                // An error happened.
              });
          }}>
          <Icon
            name="logout"
            type="simple-line-icon"
            color={styles.colors.accent}
          />
        </TouchableOpacity>
      </ButtonContainer>
    </LogoutOverlayContainer>
  );
};

export default LogoutOverlay;
