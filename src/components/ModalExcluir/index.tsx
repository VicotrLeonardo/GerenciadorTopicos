import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Modal, ModalProps } from "react-native";
import { TopicoDTO } from "../../dtos/InterfacesDTO";
import { api } from "../../services/api";

import {
  ContainerModal,
  HeaderModal,
  MainModal,
  DivModal,
  TextModal,
  DivButtonModal,
  ButtonModal,
  TextButtonModal,
  WindowModal,
  TextH1Modal,
} from "./styles";

interface Props {
  modalVisible: boolean;
  setModalVisible: (arg0: boolean) => void;
  id?: TopicoDTO["id"];
}
export function ModalExcluir({ modalVisible, setModalVisible, id }: Props) {
  const navigation = useNavigation();

  // const routes = useRoute();
  // const { id } = routes.params as Params;

  console.log("parametro EXCLUIR id aqui ", id);

  async function deleteTopico() {
    await api
      .delete(`/topicos/${id}`)
      .then(() => navigation.navigate("Home"))
      .catch((error) => {
        alert("Ocorreu um erro ao Excluir o Topico: " + error.message);
      });
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
            <TextH1Modal>EXCLUIR TOPICO</TextH1Modal>
          </HeaderModal>

          <MainModal>
            <DivModal>
              <TextModal>{`Confirmar a exclusão do Topico ?`}</TextModal>
            </DivModal>

            <DivButtonModal>
              <ButtonModal
                nome="CANCELAR"
                onPress={() => setModalVisible(false)}
              >
                <TextButtonModal>CANCELAR</TextButtonModal>
              </ButtonModal>

              <ButtonModal
                nome="EXCLUIR"
                onPress={() => {
                  try {
                    deleteTopico();
                    console.log("Passou aqui Delete");
                  } catch (error) {
                    console.log("Codigo do erro foi: ", error);
                  } finally {
                    setModalVisible(false);
                  }
                }}
              >
                <TextButtonModal>EXCLUIR</TextButtonModal>
              </ButtonModal>
            </DivButtonModal>
          </MainModal>
        </ContainerModal>
      </WindowModal>
    </Modal>
  );
}
