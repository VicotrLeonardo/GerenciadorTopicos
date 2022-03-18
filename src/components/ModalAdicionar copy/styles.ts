import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { ButtonProps, InputModalProps } from "../../dtos/TarefaDTO";

export const WindowModal = styled.View`
  display: flex;

  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);

  justify-content: center;
  align-items: center;
`;
export const ContainerModal = styled.View`
  display: flex;
  height: ${RFValue(385)}px;
  width: ${RFValue(338)}px;
  background-color: #270536;
  align-items: center;
  border-radius: 20px;
`;
export const HeaderModal = styled.View`
  display: flex;
  width: 100%;
  height: ${RFValue(35)}px;
  background-color: rgba(160, 4, 255, 0.5);
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const TextH1Modal = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: ${RFValue(18)}px;
`;

export const MainModal = styled.View`
  display: flex;
  margin-top: ${RFValue(15)}px;
  width: ${RFValue(307)}px;
  height: ${RFValue(317)}px;
`;
export const DivModal = styled.View`
  width: 307px;
  height: 79px;
  align-self: center;
`;
export const TextModal = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: ${RFValue(18)}px;
`;
export const InputModal = styled.TextInput<InputModalProps>`
  margin-top: ${RFValue(5)}px;
  width: ${RFValue(280)}px;
  height: ${RFValue(28)}px;
  background-color: ${({ nome }) =>
    nome === "ID" ? "#fff2" : "rgba(196, 196, 196, 0.8)"};
  border-radius: 10px;
  padding: ${RFValue(5)}px;
`;
export const DivButtonModal = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin-top: ${RFValue(5)}px;
`;

//

//

export const ButtonModal = styled(TouchableOpacity)<ButtonProps>`
  display: flex;
  width: ${RFValue(118)}px;
  height: ${RFValue(43)}px;

  align-items: center;
  justify-content: center;

  background-color: ${({ nome }) =>
    nome === "ADICIONAR" ? "#59F98F" : "#F05A5A"};
`;

export const TextButtonModal = styled.Text`
  color: #000000;
  font-size: ${RFValue(15)}px;
  font-weight: bold;
`;
