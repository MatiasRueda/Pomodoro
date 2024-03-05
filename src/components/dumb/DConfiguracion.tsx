import { StyleSheet, View, Text } from "react-native";
import { useConfiguracionContext } from "../../context/ConfiguracionContext";
import DTiempo from "./DTiempo";

export default function DConfiguracion(): JSX.Element {
  const configuracion = useConfiguracionContext();

  return (
    <View style={estilos.contenedor}>
      <Text>Esto es la configuracion</Text>
      <DTiempo
        default={configuracion.concentracion}
        cambiar={configuracion.cambiarConcentracion}
      />
      <DTiempo
        default={configuracion.descanzo}
        cambiar={configuracion.cambiarDescanzo}
      />
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
