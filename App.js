import React from "react";
import Routes from "./src/routes/routes";
import Toast from "react-native-toast-message";

const App = () => {
  return (
    <>
      <Routes />
      <Toast />
    </>
  );
};

export default App;
