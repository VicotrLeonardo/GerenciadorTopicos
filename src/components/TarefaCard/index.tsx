import React from "react";
import { TarefaDTO } from "../../dtos/TarefaDTO";
import { RectButtonProps } from "react-native-gesture-handler";

import {
  Container,
  DivId,
  TextId,
  DivTitulo,
  TextTitulo,
  Descricao,
  Content,
  DivDescricao,
} from "./styles";

interface Props extends RectButtonProps {
  data: TarefaDTO;
  props: () => void;
}

export function TarefaCard({ data, props }: Props) {
  return (
    <>
      <Content onPress={() => props}>
        <DivId>
          <TextId>{data.id}</TextId>
        </DivId>
        <Container>
          <DivTitulo>
            <TextTitulo>{data.titulo}</TextTitulo>
          </DivTitulo>
          <DivDescricao>
            <Descricao>{data.descricao}</Descricao>
          </DivDescricao>
        </Container>
      </Content>
    </>
  );
}
