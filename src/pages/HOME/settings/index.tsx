/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Icon} from '@rneui/themed';
import React from 'react';
import {Share} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CenteredXTopYColumnContainer} from '../../../shared/containers.styled';
import {HR, SettingsModal, SettingsRow, SettingsText} from '../home.styled';
import LogoutOverlay from './logoutOverlay';
import {SettingsStackParamList} from './settingsStack';
const Settings = () => {
  const navigation =
    useNavigation<StackNavigationProp<SettingsStackParamList>>();
  const handleRate = () => {
    console.log('rate');
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: 'PopPin link',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <CenteredXTopYColumnContainer style={{marginTop: 10}}>
        <SettingsModal>
          <SettingsRow
            onPress={() => {
              navigation.navigate('HelpContact', {});
            }}>
            <Icon name="questioncircleo" color="black" type="antdesign" />
            <SettingsText>HELP/CONTACT</SettingsText>
          </SettingsRow>
          <HR />
          <SettingsRow
            onPress={() => {
              navigation.navigate('About', {});
            }}>
            <Icon name="infocirlceo" color="black" type="antdesign" />
            <SettingsText>ABOUT</SettingsText>
          </SettingsRow>
          <HR />
          <SettingsRow onPress={handleShare}>
            <Icon name="share-outline" color="black" type="ionicon" />
            <SettingsText>SHARE</SettingsText>
          </SettingsRow>
          <HR />
          <SettingsRow onPress={handleRate}>
            <Icon name="staro" color="black" type="antdesign" />
            <SettingsText>RATE</SettingsText>
          </SettingsRow>
        </SettingsModal>
      </CenteredXTopYColumnContainer>
      <LogoutOverlay />
    </SafeAreaView>
  );
};

export default Settings;
