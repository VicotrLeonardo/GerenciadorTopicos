import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
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
import { Alert } from "react-native";

export function Home() {
  const [topicos, setTopicos] = useState<TopicoDTO[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener("focus", () => {
      async function getTopicos() {
        try {
          const response = await api.get("/topicos");
          setTopicos(response.data);
        } catch (e) {
          alert("Ocorreu um erro ao buscar os Topicos", e.message);
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
          <FontAwesome5 name="home" size={30} color="white" />
        </ButtonForum>
        <ButtonForum onPress={() => navigation.navigate("NovoTopico")}>
          <Entypo name="plus" size={30} color="white" />
        </ButtonForum>
      </Footer>
    </Container>
  );
}
