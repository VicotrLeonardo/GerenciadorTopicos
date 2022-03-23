import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
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
  TextTituloTopico,
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TopicoDTO } from "../../dtos/InterfacesDTO";
import { api } from "../../services/api";
import { ModalExcluir } from "../../components/ModalExcluir";

interface Params {
  id: TopicoDTO["id"];
}

export function TopicoPage() {
  const navigation = useNavigation();
  const routes = useRoute();

  const { id } = routes.params as Params;

  console.log("project id : ", id);

  const [topico, setTopico] = useState<TopicoDTO>();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function getTopico() {
      try {
        const response = await api.get(`/topicos/${id}`);
        setTopico(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getTopico();
  }, []);

  console.log("O topico é : ", topico);

  return (
    <Container>
      <Header>
        <TextTitulo>{`Topico: ${topico?.ds_topico}`}</TextTitulo>
      </Header>
      <Main>
        <Content>
          <DivHeader>
            <IconDiv>
              <Feather name="user" size={24} color="black" />
            </IconDiv>

            <DivNome>
              <TextTituloTopico>{topico?.ds_topico}</TextTituloTopico>
              <TextNome>{topico?.nm_usuario}</TextNome>
            </DivNome>
          </DivHeader>

          <DivMensagem>
            <TextMensagem>{topico?.ds_mensagem}</TextMensagem>
          </DivMensagem>
        </Content>
        <DivButton>
          <Button
            onPress={() => {
              setModalVisible(true);
            }}
            nome="REMOVER"
          >
            <TextButton>REMOVER</TextButton>
          </Button>

          <Button
            onPress={() => {
              try {
                navigation.navigate("AlterarTopico", { topico });

                console.log("Passou aqui EDITAR");
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
          <FontAwesome5 name="home" size={24} color="black" />
        </ButtonForum>
        <ButtonForum onPress={() => navigation.navigate("NovoTopico")}>
          <TextButton>NOVO TÓPICO</TextButton>
        </ButtonForum>
      </Footer>

      <ModalExcluir
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        id={topico?.id}
      />
    </Container>
  );
}
