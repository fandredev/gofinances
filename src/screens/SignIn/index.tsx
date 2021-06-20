import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import AppleSvg from "../../assets/apple-icon.svg";
import LogoSvg from "../../assets/finance-icon.svg";
import GoogleSvg from "../../assets/google-icon.svg";
import { SignInSocialButton } from "../../components/SignInSocialButton";
import {
  Container,
  Footer,
  FooterWrapper,
  Header,
  SignInTitle,
  Title,
  TitleWrapper,
} from "./styles";

export function SignIn(): JSX.Element {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />
          <Title>
            Controle suas {"\n"} financas de forma{"\n"} muito simples
          </Title>
        </TitleWrapper>
        <SignInTitle>
          Faça seu login com {"\n"}uma das contas abaixo
        </SignInTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <SignInSocialButton title="Entrar com Google" svg={GoogleSvg} />
          <SignInSocialButton title="Entrar com Apple" svg={AppleSvg} />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
