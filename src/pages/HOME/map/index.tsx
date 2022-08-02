import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {RouteProp, useRoute} from '@react-navigation/native';
import {TabParamList} from '..';

const Map = () => {
  const route = useRoute<RouteProp<TabParamList, 'Map'>>();
  return (
    <MapView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{flex: 1}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: route.params.lat,
        longitude: route.params.long,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default Map;
