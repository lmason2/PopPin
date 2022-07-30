import styled from 'styled-components/native';
import {styles} from '../../shared/colors';
import {Animated} from 'react-native';
import {H3} from '../../shared/text.styled';

export const CircleView = styled(Animated.View)<{translation: number}>`
  background-color: ${styles.colors.accent};
  width: 250px;
  height: 250px;
  border-radius: 250px;
  box-shadow: 5px 5px 10px grey;
  z-index: 2;
  transform: [{translateX: ${({translation}) => translation && translation}]
`;

export const BarView = styled.View`
  background-color: black;
  width: 30px;
  height: 225px;
  bottom: 2px;
`;

export const WelcomeText = styled(H3)`
  color: white;
  font-size: 25px;
  z-index: 3;
`;

export const MainText = styled(H3)`
  color: black;
  font-size: 40px;
  margin-bottom: 5%;
`;
