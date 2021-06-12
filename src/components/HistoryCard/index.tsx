import React from "react";
import { Amount, Container, Title } from "./styled";

interface Props<T = string> {
  color: T;
  title: T;
  amount: T;
}

export function HistoryCard({ color, title, amount }: Props): JSX.Element {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  );
}
