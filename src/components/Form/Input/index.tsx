import React from "react";
import { TextInputProps } from "react-native";
import { Container } from "./styled";

type Props = TextInputProps;

export function Input({ ...rest }: Props) {
  return <Container {...rest} />;
}
