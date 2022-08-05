import React from 'react';
import MapView, {LatLng, PROVIDER_GOOGLE} from 'react-native-maps';
import {RouteProp, useRoute} from '@react-navigation/native';
import {TabParamList} from '..';
import Pin from './pin';
import Overlay from './overlay';

const Map = () => {
  const route = useRoute<RouteProp<TabParamList, 'Map'>>();
  const data = route.params;
  return (
    <>
      <Overlay />
      <MapView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1}}
        mapType="terrain"
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: data.coordinates.latitude,
          longitude: data.coordinates.longitude,
          latitudeDelta: 0.0282,
          longitudeDelta: 0.0191,
        }}>
        {data.bars.map(bar => (
          <Pin barName={bar.name} location={bar.location as LatLng} />
        ))}
      </MapView>
    </>
  );
};

export default Map;
