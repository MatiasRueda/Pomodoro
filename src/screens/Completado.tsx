import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MENSAJE } from "../auxiliar/mensaje";

export default function Completado(props: { press: () => void }): JSX.Element {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.texto}>{MENSAJE.TERMINADO}</Text>
      <TouchableOpacity style={estilos.salir} onPress={props.press}>
        <Text style={estilos.textoSalir}>Aceptar</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    height: 225,
    width: 300,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },

  texto: {
    marginBottom: 30,
  },

  salir: {
    height: 50,
    width: 125,
    borderRadius: 10,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },

  textoSalir: {
    color: "#ffffff",
  },
});
