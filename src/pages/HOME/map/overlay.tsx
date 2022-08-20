import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Icon} from '@rneui/themed';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {RootStackParamList} from '../../../../App';
import {ButtonContainer, OverlayContainer} from '../home.styled';

const Overlay = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <OverlayContainer>
      <ButtonContainer>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ModalStack', {});
          }}>
          <Icon name="event" type="material" color="white" />
        </TouchableOpacity>
      </ButtonContainer>
    </OverlayContainer>
  );
};

export default Overlay;
