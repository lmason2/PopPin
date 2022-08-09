import styled from 'styled-components/native';
import {
  CenteredXTopYColumnContainer,
  LeftXCenteredYRowContainer,
} from '../../../shared/containers.styled';
import {styles} from '../../../shared/styles';
import {InviteButton} from '../home.styled';

export const ModalContainer = styled(CenteredXTopYColumnContainer)``;

export const ModalHeader = styled.Text`
  font-family: ${styles.font.main}
  font-weight: 400;
  font-size: 36px;
  line-height: 67px;
  text-align: center;
  letter-spacing: -0.333333px;
`;

export const InputContainer = styled(LeftXCenteredYRowContainer)`
  margin-top: 0px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  border-width: 2px;
  border-color: #000;
  height: 50px;
  padding-horizontal: 10px;
`;

export const MultiLineInputContainer = styled(InputContainer)`
  height: 150px;
  justify-content: flex-start;
`;

export const Input = styled.TextInput`
  font-size: 16px;
  width: 100%;
  font-family: Cairo;
  height: 100%;
`;

export const TextContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
`;

export const LabelInputContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin-bottom: 20px;
  align-items: center;
`;

export const InputLabel = styled.Text`
  font-family: ${styles.font.main}
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 28px;
`;

export const NextText = styled.Text`
  color: white;
  font-weight: 600;
`;

export const NextButton = styled(InviteButton)`
  margin-top: auto;
  margin-bottom: 30px;
`;

export const DatePickButton = styled(InviteButton)`
  background-color: transparent;
  border: 2px solid ${styles.colors.accent};
  width: 100%;
`;

export const DateText = styled.Text`
  color: ${styles.colors.accent};
  font-weight: 600;
`;
