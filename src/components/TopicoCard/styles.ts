import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  display: flex;
  background-color: #c4c4c4;

  width: 100%;
  height: ${RFValue(65)}px;

  flex-direction: row;
  align-items: center;
  padding: 25px;

  margin-bottom: ${RFValue(10)}px;
`;

export const IconDiv = styled.View`
  display: flex;
  width: ${RFValue(45)}px;
  height: ${RFValue(41)}px;
  align-items: center;
  justify-content: center;
  background-color: #fff9;
  border-radius: ${RFValue(30)}px;
`;
export const Content = styled.View`
  display: flex;
  width: ${RFValue(261)}px;
  height: ${RFValue(50)}px;
  margin-left: ${RFValue(10)}px;
  justify-content: center;
`;
export const Header = styled.View`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const TextHeader = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(14)}px;
`;
export const Footer = styled.View`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const TextFooter = styled.Text`
  font-size: ${RFValue(11)}px;
`;
