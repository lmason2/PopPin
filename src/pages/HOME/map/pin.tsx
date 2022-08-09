/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Icon} from '@rneui/themed';
import React, {FC} from 'react';
import {View} from 'react-native';
import {LatLng, Marker} from 'react-native-maps';
import {RootStackParamList} from '../../../../App';
import {styles} from '../../../shared/styles';

const getCustomPinMapper: {[type: string]: string} = {
  'Jack & Dans': 'j&d',
};

interface PinProps {
  barName: string;
  location: LatLng;
}

const Pin: FC<PinProps> = ({barName, location}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <Marker
      style={{width: 70, height: 70}}
      onPress={() => {
        navigation.navigate('Modal', {});
      }}
      coordinate={{latitude: location.latitude, longitude: location.longitude}}>
      <View style={{padding: 10}}>
        <Icon
          reverse
          name={getCustomPinMapper[barName] || 'pin'}
          color={styles.colors.accent}
          type="material-community"
          size={20}
        />
      </View>
    </Marker>
  );
};

export default Pin;
