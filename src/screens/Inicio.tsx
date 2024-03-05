import { LinearGradient } from "expo-linear-gradient";
import { useTemaContext } from "../context/TemaContext";
import { StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";
import DMostrarConfig from "../components/dumb/DMostrarConfig";
import { useScreenContext } from "../context/ScreenContext";

export default function Inicio(): JSX.Element {
  const info = useTemaContext();
  const screen = useScreenContext();

  return (
    <LinearGradient colors={info.tema.fondo} style={estilos.contenedor}>
      <View style={estilos.header}>
        <Text style={[{ color: info.tema.texto }, estilos.texto]}>
          Pomodoro
        </Text>
        <DMostrarConfig color={info.tema.texto} press={screen.mostrarConfig} />
      </View>
    </LinearGradient>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 70,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  texto: {
    width: "85%",
    textAlign: "center",
    fontSize: 35,
  },
});
