import styled from 'styled-components/native';
import {styles} from '../../shared/colors';
import {
  LeftXCenteredYRowContainer,
  LeftXTopYColumnContainer,
} from '../../shared/containers.styled';
import {H1, H5} from '../../shared/text.styled';

export const InputContainer = styled(LeftXCenteredYRowContainer)`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  justify-content: center;
  border-bottom-width: 1px;
  border-color: #000;
`;

export const MainText = styled(H1)`
  color: black;
  font-weight: 400;
  font-size: 25px;
  margin-left: 5%;
  margin-top: 10%;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 15%;
  margin-left: 10%;
`;

export const BackContainer = styled(LeftXTopYColumnContainer)`
  position: absolute;
  height: 30px;
  top: 10%;
  left: 10%;
`;

export const LoginButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 10px;
  padding-horizontal: 20px;
  margin-right: 10%;
  margin-top: 10px;
  border-radius: 40px;
  border: 2px solid white;
`;

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

export const SignUpButton = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${styles.colors.accent};
  width: 90%;
  justify-content: center;
  padding-vertical: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  border-radius: 5px;
`;

export const SignUpText = styled(H5)`
  font-weight: 700;
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

export const InfoText = styled(H5)`
  font-family: Cairo;
  color: black;
  margin-left: 5%;
  line-height: 18px;
  margin-right: 5%;
  text-align: left;
  margin-top: 5%;
`;
