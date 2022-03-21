import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import uuid from "react-native-uuid";
import { api } from "../../services/api";

import {
  Container,
  Header,
  TextTitulo,
  Main,
  Footer,
  ButtonForum,
  TextButton,
  Content,
  DivTopico,
  TextDiv,
  InputTopico,
  DivMensagem,
  InputMensagem,
  ButtonPostar,
} from "./styles";

export function NovoTopico() {
  const [titulo, setTitulo] = useState("");

  const [mensagem, setMensagem] = useState("");

  const navigation = useNavigation();

  async function onSubmit() {
    try {
      await api.post("/topicos", {
        id: uuid.v4(),
        ds_topico: titulo,
        ds_mensagem: mensagem,
        nm_usuario: "Victor Leonardo",
      });

      navigation.navigate("Home");
    } catch (error) {
      console.log(`Erro da função Submit : ${error}`);
    }
  }

  return (
    <>
      <Container>
        <Header>
          <TextTitulo>Novo Tópico</TextTitulo>
        </Header>
        <Main>
          <Content>
            <DivTopico>
              <TextDiv>Titulo do Tópico</TextDiv>
              <InputTopico
                onChangeText={(text) => setTitulo(text)}
              ></InputTopico>
            </DivTopico>
            <DivMensagem>
              <TextDiv>Mensagem</TextDiv>
              <InputMensagem
                onChangeText={(text) => setMensagem(text)}
              ></InputMensagem>
            </DivMensagem>
          </Content>
          <ButtonPostar
            onPress={() => {
              try {
                onSubmit();
                console.log("Passou aqui Submit");
              } catch (error) {
                console.log("Codigo do erro foi: ", error);
              }
            }}
          >
            <TextButton>POSTAR</TextButton>
          </ButtonPostar>
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
    </>
  );
}
