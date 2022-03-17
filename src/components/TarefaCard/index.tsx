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
}

export function TarefaCard({ data, ...rest }: Props) {
  return (
    <>
      <Content {...rest}>
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
