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
  id: any;
  titulo: string;
  descricao: string;
}

export function ModalAlterar({
  modalVisible,
  setModalVisible,
  id,
  titulo,
  descricao,
}: Props) {
  const [novoTitulo, setNovoTitulo] = useState("");
  const [novaDescricao, setNovaDescricao] = useState("");

  async function alterarTarefa() {
    try {
      await api.put(`/tarefas/${id}`, {
        titulo: novoTitulo,
        descricao: novaDescricao,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTarefa() {
    try {
      api.delete(`/tarefas/${id}`);
    } catch (error) {
      console.log(error);
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
            <TextH1Modal>ALTERAR TAREFA</TextH1Modal>
          </HeaderModal>

          <MainModal>
            <DivModal>
              <TextModal>ID</TextModal>
              <InputModal nome="ID" editable={false} value={id}></InputModal>
            </DivModal>

            <DivModal>
              <TextModal>Titulo</TextModal>
              <InputModal
                nome="titulo"
                onChangeText={(text) => setNovoTitulo(text)}
                value={titulo}
              ></InputModal>
            </DivModal>

            <DivModal>
              <TextModal>Descrição</TextModal>
              <InputModal
                nome="descricao"
                onChangeText={(text) => setNovaDescricao(text)}
                value={descricao}
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
                    alterarTarefa();
                    console.log("Passou aqui Submit");
                  } catch (error) {
                    console.log("Codigo do erro foi: ", error);
                  } finally {
                    setModalVisible(false);
                  }
                }}
              >
                <TextButtonModal>ALTERAR</TextButtonModal>
              </ButtonModal>
            </DivButtonModal>
          </MainModal>
        </ContainerModal>
      </WindowModal>
    </Modal>
  );
}
