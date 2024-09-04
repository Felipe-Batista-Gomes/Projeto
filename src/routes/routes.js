import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Registro from "../screens/Registro";
import Login from "../screens/Login";
import Prob from "../screens/Prob";
import Perfil from "../screens/Perfil";
import Configuracoes from "../screens/Configacoes";
import Principal from "../screens/Principal";
import Local from "../screens/Local";

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Registro"
          component={Registro}
          options={{ headerTitle: "Tela de Registro" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerTitle: "Tela de Login" }}
        />
        <Stack.Screen
          name="Prob"
          component={Prob}
          options={{ headerTitle: "Tela de Problemas" }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ headerTitle: "Tela do Perfil" }}
        />
        <Stack.Screen
          name="Configuracoes"
          component={Configuracoes}
          options={{ headerTitle: "Tela do Configuração" }}
        />
        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{ headerTitle: "Tela Principal" }}
        />
        <Stack.Screen
          name="Local"
          component={Local}
          options={{ headerTitle: "Tela de Estabelecimento" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
