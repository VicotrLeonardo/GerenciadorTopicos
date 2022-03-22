import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TextInput)`
  margin-top: ${RFValue(5)}px;
  width: ${RFValue(280)}px;
  height: ${RFValue(237)}px;
  background-color: rgba(196, 196, 196, 0.8);
  border-radius: 10px;
  padding: ${RFValue(5)}px;

  text-align-vertical: top;
`;
