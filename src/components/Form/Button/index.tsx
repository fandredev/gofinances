import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Text } from "./styled";

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Text>{title}</Text>
    </Container>
  );
}
