import { FlatList, FlatListProps, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { TopicoDTO } from "../../dtos/InterfacesDTO";

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

export const TopicosList = styled(
  FlatList as new (props: FlatListProps<TopicoDTO>) => FlatList<TopicoDTO>
).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;
