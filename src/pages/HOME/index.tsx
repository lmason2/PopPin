import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/themed';
import Map from './map';
import Social from './social';
import Settings from './settings';
import {styles} from '../../shared/colors';
import {db, firebaseAuth} from '../../config/db';
import {doc, getDoc} from 'firebase/firestore';
import {Text} from 'react-native';
import {CenteredXYColumnContainer} from '../../shared/containers.styled';
import {MapData, Coordinates} from '../../shared/types';

const Tab = createBottomTabNavigator();

export type TabParamList = {
  Map: {lat: number; long: number};
};

const getAllData = async (setDataLoaded: any, setMapData: any) => {
  const user = firebaseAuth.currentUser;
  if (user != null) {
    const email = user.email as string;
    const userRef = doc(db, 'users', email.toLowerCase());
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log(data);
      const collegeRef = doc(db, 'colleges', data?.college);
      const collegeSnap = await getDoc(collegeRef);
      if (collegeSnap.exists()) {
        const collegeData = collegeSnap.data();
        const coordinates: Coordinates = {
          lat: collegeData.coords.latitude,
          long: collegeData.coords.longitude,
        };
        const passedData: MapData = {
          coordinates: coordinates,
          zoom: 5,
          bars: [],
        };
        setMapData(passedData);
      }
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
    setDataLoaded(true);
  }
};

const Home = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState<MapData>();
  useEffect(() => {
    getAllData(setDataLoaded, setData);
  }, []);
  return !dataLoaded ? (
    <CenteredXYColumnContainer>
      <Text>Loading</Text>
    </CenteredXYColumnContainer>
  ) : (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let name = 'checkbox-blank-circle-outline';
          let type = 'ionicon';
          let color = focused ? styles.colors.accent : 'black';
          if (route.name === 'Map') {
            type = 'material-community';
            focused ? (name = 'map-marker') : (name = 'map-marker-outline');
          } else if (route.name === 'Social') {
            focused ? (name = 'people') : (name = 'people-outline');
          } else if (route.name === 'Settings') {
            focused ? (name = 'settings') : (name = 'settings-outline');
          }
          return <Icon name={name} color={color} type={type} size={40} />;
        },
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: {height: 110},
      })}
      initialRouteName="Map">
      <Tab.Screen name="Social" component={Social} />
      <Tab.Screen
        name="Map"
        component={Map}
        initialParams={{
          lat: data?.coordinates.lat,
          long: data?.coordinates.long,
        }}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default Home;
