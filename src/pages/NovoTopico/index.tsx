import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import uuid from "react-native-uuid";
import { api } from "../../services/api";
import { FontAwesome5 } from "@expo/vector-icons";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

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
  DivMensagem,
  ButtonPostar,
  Error,
} from "./styles";
import { TopicoDTO } from "../../dtos/InterfacesDTO";
import { InputText } from "../../components/InputText";
import { InputTextM } from "../../components/InputTextM";

interface FormData extends TopicoDTO {}

const schema = Yup.object().shape({
  ds_topico: Yup.string().required("O Título é obrigatório"),
  ds_mensagem: Yup.string().required("A mensagem é obrigatória"),
});

export function NovoTopico() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // console.log("error passou aqui", errors);

  // console.log("erro aqui", error);

  async function onSubmit(form: FormData) {
    const novoTopico = {
      id: uuid.v4(),
      ds_topico: form.ds_topico,
      ds_mensagem: form.ds_mensagem,
      nm_usuario: "Victor Leonardo",
    };
    console.log("passou aqui novo topico", novoTopico);
    try {
      await api
        .post("/topicos", novoTopico)
        .then(() => navigation.navigate("Home"));
      reset();
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

              <Controller
                control={control}
                name="ds_topico"
                render={({ field: { onChange, value } }) => (
                  <InputText
                    onChangeText={onChange}
                    placeholder="Escreva o titulo do Topico"
                  />
                )}
              />
              {errors.ds_topico && <Error>O Titulo é obrigatório</Error>}
            </DivTopico>

            <DivMensagem>
              <TextDiv>Mensagem</TextDiv>
              <Controller
                control={control}
                name="ds_mensagem"
                render={({ field: { onChange } }) => (
                  <InputTextM
                    onChangeText={onChange}
                    placeholder="Escreva uma mensagem para adicionar"
                  />
                )}
              />
              {errors.ds_mensagem && <Error>A mensagem é obrigatória</Error>}
            </DivMensagem>
          </Content>
          <ButtonPostar onPress={handleSubmit(onSubmit)}>
            <TextButton>POSTAR</TextButton>
          </ButtonPostar>
        </Main>

        <Footer>
          <ButtonForum onPress={() => navigation.navigate("Home")}>
            <FontAwesome5 name="home" size={24} color="black" />
          </ButtonForum>
          <ButtonForum>
            <TextButton>NOVO TÓPICO</TextButton>
          </ButtonForum>
        </Footer>
      </Container>
    </>
  );
}
