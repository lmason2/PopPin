import {Icon} from '@rneui/themed';
import React, {FC} from 'react';
import {LatLng, Marker} from 'react-native-maps';

const getCustomPinMapper: {[type: string]: string} = {
  'Jack & Dans': 'j&d',
};

interface PinProps {
  barName: string;
  location: LatLng;
}

const Pin: FC<PinProps> = ({barName, location}) => {
  return (
    <Marker
      onPress={() => {
        'pin pressed';
      }}
      coordinate={{latitude: location.latitude, longitude: location.longitude}}>
      <Icon
        name={getCustomPinMapper[barName] || 'pin'}
        color="black"
        type="material-community"
      />
    </Marker>
  );
};

export default Pin;
