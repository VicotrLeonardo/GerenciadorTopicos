import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

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
  Content,
  DivTopico,
  TextDiv,
  DivMensagem,
  ButtonPostar,
  Error,
} from "./styles";
import { InputText } from "../../components/InputText";
import { InputTextM } from "../../components/InputTextM";

interface Params {
  id: TopicoDTO["id"];
  ds_topico: TopicoDTO["ds_topico"];
  ds_mensagem: TopicoDTO["ds_mensagem"];
}

interface FormData extends TopicoDTO {
  topico: TopicoDTO;
}

const schema = Yup.object().shape({
  ds_topico: Yup.string().required("O Título é obrigatório"),
  ds_mensagem: Yup.string().required("A descrição é obrigatório"),
});

export function AlterarTopico() {
  const navigation = useNavigation();

  const routes = useRoute();

  // const [topico, setTopico] = useState<any>(Object);

  const { topico } = routes.params as FormData;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: topico,
  });

  console.log("parametro id aqui ", topico.id);

  // useEffect(() => {
  //   async function getTopico() {
  //     await api
  //       .get(`/topicos/${id}`)
  //       .then((response) => {
  //         setTopico(response.data);
  //       })
  //       .catch((error) => {
  //         alert("Ocorreu um erro ao buscar o Topico: " + error.message);
  //       });
  //   }
  //   getTopico();
  // }, []);

  // console.log("topico titulo  aqui: ", titulo);

  async function apiPut(form: FormData) {
    const novoTopico = {
      id: topico?.id,
      ds_topico: form.ds_topico,
      ds_mensagem: form.ds_mensagem,
      nm_usuario: "Victor Leonardo",
    };
    console.log("passou aqui novo topico", novoTopico);

    try {
      await api
        .put(`/topicos/${topico?.id}`, novoTopico)
        .then(() => navigation.navigate("Home"))
        .catch((error) => {
          alert("Ocorreu um erro ao Atualizar o Topico: " + error.message);
        });
      reset();
    } catch (error) {
      console.log(`Erro da função Put : ${error}`);
    }
  }

  return (
    <>
      <Container>
        <Header>
          <TextTitulo>{`Editar Tópico ${topico?.ds_topico}`}</TextTitulo>
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
                    placeholder={topico.ds_topico}
                    defaultValue={value && value.toString()}
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
                render={({ field: { onChange, value } }) => (
                  <InputTextM
                    onChangeText={onChange}
                    placeholder={topico.ds_mensagem}
                    defaultValue={value && value.toString()}
                  />
                )}
              />
              {errors.ds_mensagem && <Error>A mensagem é obrigatória</Error>}
            </DivMensagem>
          </Content>
          <ButtonPostar onPress={handleSubmit(apiPut)}>
            <TextButton>EDITAR</TextButton>
          </ButtonPostar>
        </Main>

        <Footer>
          <ButtonForum onPress={() => navigation.navigate("Home")}>
            <FontAwesome5 name="home" size={24} color="black" />
          </ButtonForum>
          <ButtonForum onPress={() => navigation.navigate("NovoTopico")}>
            <TextButton>NOVO TÓPICO</TextButton>
          </ButtonForum>
        </Footer>
      </Container>
    </>
  );
}
