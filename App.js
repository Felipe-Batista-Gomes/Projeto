import Routes from "./src/routes/routes";

import { ThemeProvider } from "styled-components";

import { useState } from "react";

import theme from "./src/theme";

import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.light.background};
`;

export const TextoG = styled.Text`
  font-size: 40px;
  color: ${(props) => props.theme.light.color};
`;

export const TextoP = styled.Text`
  font-size: 15px;
  color: ${(props) => props.theme.light.color};
`;

 const App = () => {
  {/*const [theme, setTheme] = useState("claro");*/}
  const isDarkTheme = theme === "escuro";

  return (
      <Routes/>
  );
};

export default App;
