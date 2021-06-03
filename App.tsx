import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import { Dashboard } from "./src/screens/Dashboard";
import { Register } from "./src/screens/Register";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  // Enquanto as fontes não forem carregadas
  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  );
}
