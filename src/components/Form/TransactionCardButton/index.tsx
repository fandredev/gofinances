import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styled";

interface Props extends TouchableOpacityProps {
  title: string;
  isActive: boolean;
  type: "up" | "down";
}

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

export function TransacionCardButton({
  type,
  isActive,
  title,
  ...rest
}: Props): JSX.Element {
  return (
    <Container isActive={isActive} type={type} {...rest} >
      <Icon name={icons[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  );
}
