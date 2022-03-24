import React from "react";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  IconDiv,
  Content,
  Header,
  TextHeader,
  Footer,
  TextFooter,
} from "./styles";
import { TopicoDTO } from "../../dtos/InterfacesDTO";

interface Props extends TopicoDTO {
  onPress: () => void;
}

export function TopicoCard({
  id,
  ds_topico,
  ds_mensagem,
  nm_usuario,
  onPress,
}: Props) {
  return (
    <Container onPress={onPress}>
      <IconDiv>
        <Feather name="user" size={24} color="black" />
      </IconDiv>
      <Content>
        <Header>
          <TextHeader>{ds_topico}</TextHeader>
        </Header>
        <Footer>
          <TextFooter>{ds_mensagem.substring(0, 10)}...</TextFooter>
        </Footer>
      </Content>
    </Container>
  );
}
