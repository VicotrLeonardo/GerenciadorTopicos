import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";
import { ButtonProps, TarefaDTO, InputModalProps } from "../../dtos/TarefaDTO";
import { FlatList, FlatListProps, TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #121212;
  align-items: center;
`;

export const Header = styled.View`
  display: flex;
  margin-top: ${RFValue(30)}px;
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
