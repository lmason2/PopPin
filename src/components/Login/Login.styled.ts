import styled from 'styled-components/native';
import {
  CenteredXBottomYColumnContainer,
  LeftXCenteredYRowContainer,
  LeftXTopYColumnContainer,
} from '../../shared/containers.styled';
import {H5} from '../../shared/text.styled';

export const InputContainer = styled(LeftXCenteredYRowContainer)`
  width: 80%;
  background-color: white;
  padding-horizontal: 15px;
  padding-vertical: 10px;
  margin-top: 10px;
  border-width: 1px;
  border-radius: 30px;
  border-color: #fff;
  box-shadow: 3px 3px 3px black;
`;

export const ForgotPasswordText = styled(H5)`
  margin-top: 10px;
  margin-right: 10%;
  opacity: 0.5;
`;

export const CreateContainer = styled(CenteredXBottomYColumnContainer)`
  padding-bottom: 10%;
`;

export const BackContainer = styled(LeftXTopYColumnContainer)`
  padding-top: 15%;
  padding-left: 10%;
`;

export const BoldUnderlinedText = styled(H5)`
  font-weight: bold;
  text-decoration-line: underline;
  text-decoration-style: solid;
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
