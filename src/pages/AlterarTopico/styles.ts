import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  display: flex;
  height: ${RFValue(85)}px;
  width: 100%;
  background-color: #2d2c35;

  align-items: center;
  justify-content: center;

  border-bottom-width: 2px;
  border-bottom-color: #a004ff;
`;
export const TextTitulo = styled.Text`
  margin-top: ${RFValue(25)}px;
  font-weight: bold;
  color: #fffdfd;
  font-size: ${RFValue(20)}px;
`;
export const Main = styled.View`
  display: flex;
  flex: 1;
  width: 100%;
  background-color: #2d2c35;
  align-items: center;
`;
export const Footer = styled.View`
  display: flex;
  width: 100%;
  height: ${RFValue(54)}px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #2d2c35;
  border-top-width: 2px;
  border-top-color: #a004ff;
`;
export const ButtonForum = styled(TouchableOpacity)`
  padding: 10px;
  border-radius: 10px;
`;
export const TextButton = styled.Text`
  font-weight: bold;
  color: black;
  font-size: ${RFValue(12)}px;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: ${RFValue(20)}px;
  width: ${RFValue(334)}px;
  height: ${RFValue(416)}px;

  border-top-width: 2px;
  border-top-color: #a004ff;

  border-bottom-width: 2px;
  border-bottom-color: #a004ff;

  background-color: #fff1;
`;
export const DivTopico = styled.View`
  display: flex;
  margin-top: ${RFValue(10)}px;
  width: ${RFValue(308)}px;
  height: ${RFValue(63)}px;
`;
export const TextDiv = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: ${RFValue(18)}px;
`;
export const InputTopico = styled.TextInput`
  margin-top: ${RFValue(5)}px;
  width: ${RFValue(280)}px;
  height: ${RFValue(28)}px;
  background-color: rgba(196, 196, 196, 0.8);
  border-radius: 10px;
  padding: ${RFValue(5)}px;
`;
export const DivMensagem = styled.View`
  display: flex;
  margin-top: ${RFValue(10)}px;
  width: ${RFValue(308)}px;
  height: ${RFValue(63)}px;
`;
export const InputMensagem = styled.TextInput`
  margin-top: ${RFValue(5)}px;
  width: ${RFValue(280)}px;
  height: ${RFValue(237)}px;
  background-color: rgba(196, 196, 196, 0.8);
  border-radius: 10px;
  padding: ${RFValue(5)}px;

  text-align-vertical: top;
`;
export const ButtonPostar = styled(TouchableOpacity)`
  border: 2px solid;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;

  width: ${RFValue(152)}px;
  height: ${RFValue(41)}px;

  margin-top: ${RFValue(10)}px;

  align-items: center;
  justify-content: center;

  background-color: #70d096;
`;

export const Error = styled.Text`
  font-size: 12px;
  color: red;
`;
