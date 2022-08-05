import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Icon} from '@rneui/themed';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CenteredXTopYColumnContainer} from '../../../shared/containers.styled';
import {HR, SettingsModal, SettingsRow, SettingsText} from '../home.styled';
import {SettingsStackParamList} from './settingsStack';
const Settings = () => {
  const navigation =
    useNavigation<StackNavigationProp<SettingsStackParamList>>();
  const handleShare = () => {
    console.log('share');
  };

  const handleRate = () => {
    console.log('rate');
  };
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <CenteredXTopYColumnContainer>
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
    </SafeAreaView>
  );
};

export default Settings;
