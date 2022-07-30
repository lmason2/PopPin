import styled from 'styled-components/native';
import {styles} from '../../shared/colors';
export const LoginHomeButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  width: 50%;
  padding-vertical: 5%;
  border-radius: 10px;
  margin-bottom: 5%;
`;

export const RegisterHomeButton = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${styles.colors.accent}
  justify-content: center;
  align-items: center;
  border: 2px solid ${styles.colors.accent};
  width: 50%;
  padding-vertical: 5%;
  border-radius: 10px;
`;

export const LoginText = styled.Text`
  color: black;
  font-family: Cairo;
  font-weight: 700;
`;

export const RegisterText = styled.Text`
  color: white;
  font-family: Cairo;
  font-weight: 700;
`;
