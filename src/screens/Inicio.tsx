import { LinearGradient } from "expo-linear-gradient";
import { useTemaContext } from "../context/TemaContext";
import { StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";
import DMostrarConfig from "../components/dumb/DMostrarConfig";
import { useScreenContext } from "../context/ScreenContext";
import DCronometro from "../components/dumb/DCronometro";
import DIniciar from "../components/dumb/DIniciar";
import SMusica from "../components/smart/SMusica";

export default function Inicio(): JSX.Element {
  const info = useTemaContext();
  const screen = useScreenContext();
  const saludo = (): void => {
    console.log("Holaaa");
  };

  return (
    <LinearGradient colors={info.tema.fondo} style={estilos.contenedor}>
      <Text style={[{ color: info.tema.texto }, estilos.texto]}>Pomodoro</Text>
      <DCronometro color={info.tema.texto} tiempo={10} />
      <View style={estilos.opciones}>
        <SMusica color={info.tema.texto} />
        <DIniciar color={info.tema.texto} press={saludo} />
        <DMostrarConfig color={info.tema.texto} press={screen.mostrarConfig} />
      </View>
    </LinearGradient>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "space-around",
  },
  opciones: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  texto: {
    width: "100%",
    textAlign: "center",
    fontSize: 35,
  },
});
