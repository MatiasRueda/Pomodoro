import { StyleSheet, View, Text } from "react-native";

export default function DConfiguracion(): JSX.Element {
  return (
    <View style={estilos.contenedor}>
      <Text>Esto es la configuracion</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
