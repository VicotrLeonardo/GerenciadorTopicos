import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";
import { TarefaDTO } from "../../dtos/TarefaDTO";
import { FlatList, FlatListProps, TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #121212;
  align-items: center;
`;

export const Header = styled.View`
  display: flex;
  margin-top: ${RFValue(20)}px;
  height: ${RFValue(75)}px;
  width: ${RFValue(317)}px;
  border-bottom-width: 2px;
  border-bottom-color: #a004ff;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
export const TextH1 = styled.Text`
  color: #ad00ff;
  font-weight: bold;
  font-size: ${RFValue(24)}px;
`;
export const DivAdicionar = styled.View`
  display: flex;

  width: 100%;
  align-items: flex-end;

  margin-top: ${RFValue(10)}px;
  margin-right: ${RFValue(10)}px;
`;
export const ButtonAdd = styled(TouchableOpacity)``;

export const DivMain = styled.View`
  flex: 1;
  width: 100%;
  margin-top: ${RFValue(10)}px;
  align-items: center;
`;
export const TarefasList = styled(
  FlatList as new (props: FlatListProps<TarefaDTO>) => FlatList<TarefaDTO>
).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;

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
export const InputModal = styled.TextInput`
  margin-top: ${RFValue(5)}px;
  width: ${RFValue(280)}px;
  height: ${RFValue(28)}px;
  background-color: rgba(196, 196, 196, 0.8);
  border-radius: 10px;
`;
export const DivButtonModal = styled.View`
  display: flex;
  flex-direction: row;
`;
export const ButtonModal = styled.View``;
export const TextButtonModal = styled.Text``;
