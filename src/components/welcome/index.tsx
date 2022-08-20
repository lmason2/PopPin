import {CommonActions, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';
import {RootStackParamList} from '../../../App';
import {styles} from '../../shared/styles';
import {BarView, MainText, WelcomeText} from './welcom.styled';

export const CircleComponent: FC<{name: string}> = ({name}) => {
  const scale = useRef(new Animated.Value(1)).current;
  const [removeName, setRemoveName] = useState(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  useEffect(() => {
    setTimeout(() => {
      setRemoveName(true);
    }, 1200);
    Animated.sequence([
      Animated.delay(1200),
      Animated.timing(scale, {
        toValue: 6,
        useNativeDriver: true,
      }),
    ]).start(({}) => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}],
        }),
      );
    });
  }, [scale, setRemoveName, navigation]);

  return (
    <>
      <MainText>Welcome</MainText>
      <Animated.View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 200,
          height: 200,
          backgroundColor: `${styles.colors.accent}`,
          borderRadius: 250,
          zIndex: 2,
          transform: [{scale: scale}],
        }}>
        {!removeName && <WelcomeText>{name}</WelcomeText>}
      </Animated.View>
    </>
  );
  //   return <CircleView style={{transform: [{translateX: translation}]}} />;
};

export const BarComponent = () => {
  return <BarView />;
};
