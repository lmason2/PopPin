import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/themed';
import Map from './map';
import Social from './social';
import Settings from './settings';
import {styles} from '../../shared/colors';
import {db, firebaseAuth} from '../../config/db';
import {doc, getDoc} from 'firebase/firestore';
import {Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

const getAllData = async (setDataLoaded: any, setData: any) => {
  const user = firebaseAuth.currentUser;
  if (user != null) {
    const email = user.email as string;
    const userRef = doc(db, 'users', email.toLowerCase());
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log(data);
      setData(data);
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
    setDataLoaded(true);
  }
};

const Home = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    getAllData(setDataLoaded, setData);
  }, []);
  return !dataLoaded ? (
    <View>
      <Text>Loading</Text>
    </View>
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
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default Home;
