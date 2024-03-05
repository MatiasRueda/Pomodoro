import { View, Text, StyleSheet } from "react-native";
import { useScreenContext } from "../context/ScreenContext";
import DSalir from "../components/dumb/DSalir";

export default function Config(): JSX.Element {
  const screen = useScreenContext();

  return (
    <View style={estilos.contenedor}>
      <DSalir press={screen.sacarConfig} />
      <Text>Esto es un menu xD</Text>
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
