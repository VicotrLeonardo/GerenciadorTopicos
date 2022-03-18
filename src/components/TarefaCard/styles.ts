import { TouchableOpacity } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Content = styled(TouchableOpacity)`
  width: ${RFValue(274)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const Container = styled.View`
  border: 1px solid #ad00ff;
  width: ${RFValue(274)}px;
  height: ${RFValue(94)}px;
  align-items: center;
  background-color: #000000;
`;

export const DivId = styled.View`
  width: 100%;
  background-color: rgba(160, 4, 255, 0.3);
  padding: 2px;
`;
export const TextId = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: ${RFValue(14)}px;
`;
export const DivTitulo = styled.View`
  background-color: rgba(160, 4, 255, 0.3);
  width: 100%;
  align-items: center;
  justify-content: center;
  height: ${RFValue(27)}px;
`;
export const TextTitulo = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const DivDescricao = styled.View`
  width: 100%;
  padding: 5px;
`;

export const Descricao = styled.Text`
  color: #fff;
  font-weight: bold;
`;
