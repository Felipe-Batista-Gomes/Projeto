import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./src/i18n";
import Routes from "./src/routes/routes";
import Toast from "react-native-toast-message";

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <>
        <Routes />
        <Toast />
      </>
    </I18nextProvider>
  );
};

export default App;