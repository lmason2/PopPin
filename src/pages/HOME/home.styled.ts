import styled from 'styled-components/native';
import {styles} from '../../shared/colors';
import {CenteredXTopYColumnContainer} from '../../shared/containers.styled';

export const SocialContainer = styled(CenteredXTopYColumnContainer)`
  gap: 10px;
`;

export const SearchContainer = styled.View`
  display: flex;
  width: 95%;
  border: 2px solid black;
  background-color: white;
  padding: 10px 20px;
  margin-top: 20px;
`;

export const SearchInput = styled.TextInput`
  font-size: 16px;
  width: 100%;
  font-family: Cairo;
  margin-left: auto;
  margin-right: auto;
`;

export const InviteButton = styled.TouchableOpacity`
  display: flex;
  background: ${styles.colors.accent};
  border-radius: 10px;
  width: 90%;
  margin-top: 10px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const InviteText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  align-items: center;
  color: white;
`;

export const UserRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  margin-top: 10px;
`;

export const PinContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PinCircle = styled.View`
  background-color: white;
  width: 35px;
  height: 35px;
  border: 1px solid #d00000;
  border-radius: 35px;
  justify-content: center;
`;

export const PinText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  align-items: center;
  color: black;
  text-align: center;
`;

export const PinStick = styled.View`
  width: 0px;
  height: 10px;
  border: 0.5px solid #000000;
`;

export const UsernameText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  align-items: flex-end;
  color: black;
  margin-left: 10%;
`;

export const SocialHeader = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #000000;
  text-align: left;
  width: 90%;
  margin-vertical: 10px;
`;
