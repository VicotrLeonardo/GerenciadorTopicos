import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ButtonProps {
  nome: string;
}

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

export const Content = styled.View`
  display: flex;

  flex-direction: column;
  align-items: center;

  margin-top: ${RFValue(20)}px;
  width: ${RFValue(324)}px;
  height: ${RFValue(400)}px;

  border-top-width: 2px;
  border-top-color: #a004ff;

  border-bottom-width: 2px;
  border-bottom-color: #a004ff;

  background-color: #fff1;
`;
export const DivHeader = styled.View`
  display: flex;

  flex-direction: row;
  width: ${RFValue(290)}px;
  height: ${RFValue(63)}px;
  margin-top: ${RFValue(10)}px;
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
export const DivNome = styled.View`
  display: flex;
  justify-content: center;
  width: ${RFValue(195)}px;
  height: ${RFValue(46)}px;
  margin-left: ${RFValue(5)}px;
`;

export const TextTituloTopico = styled.Text`
  font-weight: bold;
  color: #fffdfd;
  font-size: ${RFValue(20)}px;
`;

export const TextNome = styled.Text`
  color: #fffdfd;
  font-size: ${RFValue(12)}px;
`;
export const DivMensagem = styled.View`
  display: flex;
  width: ${RFValue(284)}px;
  height: ${RFValue(244)}px;
`;
export const TextMensagem = styled.Text`
  color: #fff;
`;

export const DivButton = styled.View`
  display: flex;
  width: 100%;
  height: ${RFValue(75)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(TouchableOpacity)<ButtonProps>`
  border: 2px solid;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;

  width: ${RFValue(152)}px;
  height: ${RFValue(41)}px;

  margin-top: ${RFValue(10)}px;

  align-items: center;
  justify-content: center;

  background-color: ${({ nome }) =>
    nome === "EDITAR" ? "#59F98F" : "#F05A5A"};
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
  border: 2px solid;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
`;
export const TextButton = styled.Text`
  font-weight: bold;
  color: black;
  font-size: ${RFValue(12)}px;
`;
