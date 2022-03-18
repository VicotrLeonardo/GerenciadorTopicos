import React, { useState } from "react";
import { Modal, ModalProps } from "react-native";
import { api } from "../../services/api";

import {
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

interface Props {
  modalVisible: boolean;
  setModalVisible: (arg0: boolean) => void;
  setUpdateList: (udpateList: boolean) => void;
  udpateList: boolean;
}

export function ModalAdicionar({
  modalVisible,
  setModalVisible,
  setUpdateList,
  udpateList,
}: Props) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  async function onSubmit() {
    try {
      await api.post("/tarefas", {
        titulo: titulo,
        descricao: descricao,
      });
      setUpdateList(!udpateList);
    } catch (error) {
      console.log(`Erro da função Submit : ${error}`);
    }
  }

  return (
    <Modal
      animationType="fade"
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
              <InputModal nome="ID" editable={false}></InputModal>
            </DivModal>

            <DivModal>
              <TextModal>Titulo</TextModal>
              <InputModal
                nome="titulo"
                onChangeText={(text) => setTitulo(text)}
              ></InputModal>
            </DivModal>

            <DivModal>
              <TextModal>Descrição</TextModal>
              <InputModal
                nome="descricao"
                onChangeText={(text) => setDescricao(text)}
              ></InputModal>
            </DivModal>

            <DivButtonModal>
              <ButtonModal
                nome="CANCELAR"
                onPress={() => setModalVisible(false)}
              >
                <TextButtonModal>CANCELAR</TextButtonModal>
              </ButtonModal>

              <ButtonModal
                nome="ADICIONAR"
                onPress={() => {
                  try {
                    onSubmit();
                    console.log("Passou aqui Submit");
                  } catch (error) {
                    console.log("Codigo do erro foi: ", error);
                  } finally {
                    setModalVisible(false);
                  }
                }}
              >
                <TextButtonModal>ADICIONAR</TextButtonModal>
              </ButtonModal>
            </DivButtonModal>
          </MainModal>
        </ContainerModal>
      </WindowModal>
    </Modal>
  );
}
