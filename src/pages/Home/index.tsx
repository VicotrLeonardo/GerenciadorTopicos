import React, { useEffect, useState } from "react";
import { Alert, Modal, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Container,
  Header,
  TextH1,
  DivAdicionar,
  ButtonAdd,
  DivMain,
  TarefasList,
} from "./styles";
import { TarefaCard } from "../../components/TarefaCard";
import { TarefaDTO } from "../../dtos/TarefaDTO";
import { api } from "../../services/api";
import { ModalAdicionar } from "../../components/ModalAdicionar";
import { ModalAlterar } from "../../components/ModalAlterar";

export function Home() {
  const [tarefas, setTarefas] = useState<TarefaDTO[]>([]);

  const [modalVisible, setModalVisible] = useState(false);

  const [modalAlterarVisible, setModalAlterarVisible] = useState(false);

  const [udpateList, setUpdateList] = useState(false);

  //States do modal alterar
  const [idAlterar, setIdAlterar] = useState("");
  const [tituloAlterar, setTituloAlterar] = useState("");
  const [descricaoAlterar, setDescricaoAlterar] = useState("");
  //
  useEffect(() => {
    async function getTarefas() {
      try {
        const response = await api.get("/tarefas");
        setTarefas(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getTarefas();
  }, [udpateList]);

  return (
    <>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Header>
          <TextH1>TAREFAS</TextH1>
        </Header>

        <DivAdicionar>
          <ButtonAdd
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <MaterialCommunityIcons
              name="plus"
              size={40}
              style={{
                color: "#A004FF",
              }}
            />
          </ButtonAdd>
        </DivAdicionar>

        <DivMain>
          <TarefasList
            data={tarefas}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TarefaCard
                data={item}
                props={() => {
                  setModalAlterarVisible(true),
                    setIdAlterar(item.id),
                    setTituloAlterar(item.titulo),
                    setDescricaoAlterar(item.descricao);
                }}
              />
            )}
          />
        </DivMain>
      </Container>
      <ModalAdicionar
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setUpdateList={setUpdateList}
        udpateList={udpateList}
      />
      <ModalAlterar
        modalVisible={modalAlterarVisible}
        setModalVisible={setModalAlterarVisible}
        id={idAlterar}
        titulo={tituloAlterar}
        descricao={descricaoAlterar}
      />
    </>
  );
}
