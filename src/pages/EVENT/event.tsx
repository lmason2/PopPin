/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import DatePicker from 'react-native-date-picker';
import {
  InputContainer,
  InputLabel,
  LabelInputContainer,
  ModalContainer,
  ModalHeader,
  Input,
  TextContainer,
  MultiLineInputContainer,
  NextText,
  NextButton,
  DatePickButton,
  DateText,
} from '../HOME/map/map.styled';
import {KeyboardAvoidingView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ModalStackParamList} from '../../../App';

const NewEvent = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [moveScreen, setMoveScreen] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ModalStackParamList>>();
  const options = {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  return (
    <KeyboardAvoidingView behavior={'position'} enabled={moveScreen}>
      <SafeAreaView style={{backgroundColor: 'white'}}>
        <ModalContainer>
          <ModalHeader>Host an Event</ModalHeader>
          <LabelInputContainer>
            <TextContainer>
              <InputLabel>Event Name</InputLabel>
            </TextContainer>
            <InputContainer>
              <Input
                onFocus={() => {
                  setMoveScreen(false);
                }}
              />
            </InputContainer>
          </LabelInputContainer>
          <LabelInputContainer>
            <TextContainer>
              <InputLabel>Event Date and Start Time:</InputLabel>
            </TextContainer>
            <TextContainer>
              <InputLabel>
                {date.toLocaleDateString('en-US', options)}
              </InputLabel>
            </TextContainer>
            <DatePickButton title="Open" onPress={() => setOpen(true)}>
              <DateText>SET DATE</DateText>
            </DatePickButton>
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={localDate => {
                setOpen(false);
                setDate(localDate);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <TextContainer>
              <InputLabel>Location</InputLabel>
            </TextContainer>
            <InputContainer>
              <Input
                textContextType="streetAddressLine1"
                onFocus={() => {
                  setMoveScreen(true);
                }}
              />
            </InputContainer>
          </LabelInputContainer>
          <LabelInputContainer>
            <TextContainer>
              <InputLabel>Event Description</InputLabel>
            </TextContainer>
            <MultiLineInputContainer>
              <Input
                multiline={true}
                onFocus={() => {
                  setMoveScreen(true);
                }}
              />
            </MultiLineInputContainer>
          </LabelInputContainer>
          <NextButton
            onPress={() => {
              navigation.navigate('AddHosts', {});
            }}>
            <NextText>NEXT</NextText>
          </NextButton>
        </ModalContainer>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default NewEvent;
