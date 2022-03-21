import { GenerateUUID } from "react-native-uuid";
import { string } from "yup";

export interface TopicoDTO {
  id: GenerateUUID;
  ds_topico: string;
  ds_mensagem: string;
  nm_usuario: string;
}

export interface ButtonProps {
  nome: string;
}

export interface InputModalProps {
  nome: string;
}
