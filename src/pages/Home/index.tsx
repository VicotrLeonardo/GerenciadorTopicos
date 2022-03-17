import React, { useEffect, useState } from "react";
import { Modal, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Container,
  Header,
  TextH1,
  DivAdicionar,
  ButtonAdd,
  DivMain,
  TarefasList,
  ContainerModal,
  HeaderModal,
  MainModal,
  DivModal,
  TextModal,
  InputModal,
  DivButtonModal,
  ButtonModal,
  TextButtonModal,
  WindowModal,
  TextH1Modal,
} from "./styles";
import { TarefaCard } from "../../components/TarefaCard";
import { TarefaDTO } from "../../dtos/TarefaDTO";
import { api } from "../../services/api";

export function Home() {
  const [tarefas, setTarefas] = useState<TarefaDTO[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function getTarefas() {
      try {
        const response = await api.get("/tarefas");

        console.log(`Passou aqui, response: ${response.data}`);

        setTarefas(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getTarefas();
  }, []);

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
              <TarefaCard data={item} onPress={() => {}} />
            )}
          />
        </DivMain>
      </Container>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <WindowModal>
          <ContainerModal>
            <HeaderModal>
              <TextH1Modal>ADICIONAR NOVA TAREFA</TextH1Modal>
            </HeaderModal>

            <MainModal>
              <DivModal>
                <TextModal>ID</TextModal>
                <InputModal></InputModal>
              </DivModal>

              <DivModal>
                <TextModal>Titulo</TextModal>
                <InputModal></InputModal>
              </DivModal>

              <DivModal>
                <TextModal>Descrição</TextModal>
                <InputModal></InputModal>
              </DivModal>

              <DivButtonModal>
                <ButtonModal>
                  <TextButtonModal>CANCELAR</TextButtonModal>
                </ButtonModal>

                <ButtonModal>
                  <TextButtonModal>CONFIRMAR</TextButtonModal>
                </ButtonModal>
              </DivButtonModal>
            </MainModal>
          </ContainerModal>
        </WindowModal>
      </Modal>
    </>
  );
}
