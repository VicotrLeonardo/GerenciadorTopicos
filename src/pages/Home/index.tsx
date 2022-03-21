import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { GenerateUUID } from "react-native-uuid";
import { TopicoCard } from "../../components/TopicoCard";
import { TopicoDTO } from "../../dtos/InterfacesDTO";
import { api } from "../../services/api";

import {
  Container,
  Header,
  TextTitulo,
  Main,
  Footer,
  ButtonForum,
  TextButton,
  TopicosList,
} from "./styles";

export function Home() {
  const [topicos, setTopicos] = useState<TopicoDTO[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener("focus", () => {
      async function getTopicos() {
        try {
          const response = await api.get("/topicos");
          setTopicos(response.data);
        } catch (error) {
          console.log(error);
        }
      }

      getTopicos();
    });
  }, []);

  return (
    <Container>
      <Header>
        <TextTitulo>Últimas Postagens</TextTitulo>
      </Header>
      <Main>
        <TopicosList
          data={topicos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TopicoCard
              id={item.id}
              ds_topico={item.ds_topico}
              ds_mensagem={item.ds_mensagem}
              nm_usuario={item.nm_usuario}
              onPress={() =>
                navigation.navigate("TopicoPage", {
                  id: item.id,
                })
              }
            />
          )}
        />
      </Main>
      <Footer>
        <ButtonForum onPress={() => navigation.navigate("Home")}>
          <TextButton>FÓRUM</TextButton>
        </ButtonForum>
        <ButtonForum onPress={() => navigation.navigate("NovoTopico")}>
          <TextButton>NOVO TÓPICO</TextButton>
        </ButtonForum>
      </Footer>
    </Container>
  );
}
