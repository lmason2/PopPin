import styled from 'styled-components/native';

export const CenteredXYColumnContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-horizontal: 5px;
  background-color: white;
`;

export const ImageCenteredXYColumnContainer = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const LeftXCenteredYRowContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: white;
`;

export const CenteredXBottomYColumnContainer = styled.View`
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const CenteredXTopYColumnContainer = styled.View`
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const LeftXTopYColumnContainer = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const RightXCenteredYRowContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background-color: white;
`;

export const AbsoluteContainer = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 3;
  background-color: white;
`;
