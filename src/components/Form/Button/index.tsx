import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Text } from "./styled";

interface Props extends RectButtonProps {
  title: string;
  onPress: () => void;
}

export function Button({ title, onPress, ...rest }: Props) {
  return (
    <Container onPress={onPress} {...rest}>
      <Text>{title}</Text>
    </Container>
  );
}
