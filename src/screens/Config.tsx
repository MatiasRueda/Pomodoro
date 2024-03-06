import { View, StyleSheet } from "react-native";
import { useScreenContext } from "../context/ScreenContext";
import DSalir from "../components/dumb/DSalir";
import SConfiguracion from "../components/smart/SConfiguracion";

export default function Config(): JSX.Element {
  const screen = useScreenContext();

  return (
    <View style={estilos.contenedor}>
      <DSalir press={screen.sacarConfig} />
      <SConfiguracion />
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    height: 550,
    width: 300,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#000000",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
