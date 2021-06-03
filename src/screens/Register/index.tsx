import React, { useState } from "react";
import { Button } from "../../components/Form/Button";
import { Input } from "../../components/Form/Input";
import { TransacionCardButton } from "../../components/Form/TransactionCardButton";
import {
  Container,
  Fields,
  Form,
  Header,
  Title,
  TransactionTypes,
} from "./styles";

export function Register() {
  const [transactionType, setTransactionType] = useState("");

  function handleTransactionTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionTypes>
            <TransacionCardButton
              onPress={() => handleTransactionTypeSelect("up")}
              type="up"
              title="Income"
              isActive={transactionType === "up"}
            />
            <TransacionCardButton
              onPress={() => handleTransactionTypeSelect("down")}
              type="down"
              title="Outcome"
              isActive={transactionType === "down"}
            />
          </TransactionTypes>
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
