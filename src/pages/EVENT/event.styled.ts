import styled from 'styled-components/native';
import {CenteredXYColumnContainer} from '../../shared/containers.styled';
import {styles} from '../../shared/styles';

export const LargeLabel = styled.Text`
  color: black;
  font-family: Cairo;
  font-weight: 400;
  font-size: 36px;
  line-height: 67px;
  text-align: center;
  letter-spacing: -0.333333px;
`;

export const SmallLabel = styled.Text`
  font-family: Cairo;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 28px;
  display: flex;
  align-items: center;
`;

export const ActionButton = styled.TouchableOpacity`
  display: flex;
  background: ${styles.colors.accent};
  border-radius: 10px;
  width: 90%;
  margin-top: 10px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const AddHostsContainer = styled(CenteredXYColumnContainer)`
  bottom: 10%;
`;
