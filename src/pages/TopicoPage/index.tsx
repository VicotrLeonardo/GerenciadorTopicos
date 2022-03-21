import React, { useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import {
  Container,
  Header,
  TextTitulo,
  Main,
  Content,
  DivHeader,
  IconDiv,
  DivNome,
  TextNome,
  DivMensagem,
  TextMensagem,
  Button,
  Footer,
  ButtonForum,
  TextButton,
  DivButton,
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TopicoDTO } from "../../dtos/InterfacesDTO";

interface Props extends TopicoDTO {}

export function TopicoPage() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const id = params?.id;

  useEffect(() => {}, []);

  return (
    <Container>
      <Header>
        <TextTitulo>Topico 1 teste</TextTitulo>
      </Header>
      <Main>
        <Content>
          <DivHeader>
            <IconDiv>
              <Feather name="user" size={24} color="black" />
            </IconDiv>

            <DivNome>
              <TextNome>Victor</TextNome>
            </DivNome>
          </DivHeader>

          <DivMensagem>
            <TextMensagem>Mensagem</TextMensagem>
          </DivMensagem>
        </Content>
        <DivButton>
          <Button
            onPress={() => {
              try {
                console.log("Passou aqui Submit");
              } catch (error) {
                console.log("Codigo do erro foi: ", error);
              }
            }}
            nome="REMOVER"
          >
            <TextButton>REMOVER</TextButton>
          </Button>

          <Button
            onPress={() => {
              try {
                console.log("Passou aqui Submit");
              } catch (error) {
                console.log("Codigo do erro foi: ", error);
              }
            }}
            nome="EDITAR"
          >
            <TextButton>EDITAR</TextButton>
          </Button>
        </DivButton>
      </Main>

      <Footer>
        <ButtonForum onPress={() => navigation.navigate("Home")}>
          <TextButton>FÓRUM</TextButton>
        </ButtonForum>
        <ButtonForum>
          <TextButton>NOVO TÓPICO</TextButton>
        </ButtonForum>
      </Footer>
    </Container>
  );
}
