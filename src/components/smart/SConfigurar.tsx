import { StyleSheet, View, Text } from "react-native";
import { useConfiguracionContext } from "../../context/ConfiguracionContext";
import DTiempo from "../dumb/DTiempo";
import SIntervalo from "./SIntervalo";

export default function DConfiguracion(): JSX.Element {
  const configuracion = useConfiguracionContext();

  return (
    <View style={estilos.contenedor}>
      <View style={estilos.centrado}>
        <Text>Cantidad de intervalos</Text>
        <SIntervalo
          default={configuracion.intervalo}
          cambiar={configuracion.cambiarIntervalo}
        />
      </View>
      <View style={estilos.centrado}>
        <Text>Tiempo para concentrarse</Text>
        <DTiempo
          default={configuracion.concentracion}
          cambiar={configuracion.cambiarConcentracion}
        />
      </View>
      <View style={estilos.centrado}>
        <Text>Tiempo para descanzar</Text>
        <DTiempo
          default={configuracion.descanzo}
          cambiar={configuracion.cambiarDescanzo}
        />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  centrado: {
    alignItems: "center",
    justifyContent: "center",
  },
});
