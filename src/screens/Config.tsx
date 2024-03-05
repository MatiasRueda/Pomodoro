import { View, StyleSheet } from "react-native";
import { useScreenContext } from "../context/ScreenContext";
import DSalir from "../components/dumb/DSalir";
import DConfiguracion from "../components/dumb/DConfiguracion";

export default function Config(): JSX.Element {
  const screen = useScreenContext();

  return (
    <View style={estilos.contenedor}>
      <DSalir press={screen.sacarConfig} />
      <DConfiguracion />
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    height: 450,
    width: 250,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
