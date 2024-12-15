import React, {useState, useMemo} from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./src/i18n";
import Routes from "./src/routes/routes";
import Toast from "react-native-toast-message";
import { NavigationContainer } from "@react-navigation/native";
import AppContext from "./src/themes/AppContext";
import LightTheme from "./src/themes/lighttheme";
import DarkTheme from "./src/themes/darktheme";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const appContext = useMemo(() => {
    return {isDarkTheme, setIsDarkTheme};
  });
  return (
    <NavigationContainer theme={isDarkTheme ? DarkTheme : LightTheme}>
     <AppContext.Provider value={appContext}>
       <I18nextProvider i18n={i18n}>
         <>
          <Routes />
          <Toast />
         </>
        </I18nextProvider>
     </AppContext.Provider>
    </NavigationContainer>
  );
};

export default App;