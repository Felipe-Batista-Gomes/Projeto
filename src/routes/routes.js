import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Registro from "../screens/Registro";
import Login from "../screens/Login";
import Prob from "../screens/Prob";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
