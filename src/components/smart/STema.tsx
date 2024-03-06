import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { temas, useTemaContext } from "../../context/TemaContext";
import { LinearGradient } from "expo-linear-gradient";

export default function STema(): JSX.Element {
  const info = useTemaContext();
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.texto}>Tema:</Text>
      <View style={estilos.opciones}>
        {Object.entries(temas).map(([llave, value]) => (
          <TouchableOpacity
            key={llave}
            onPress={() => info.cambiarColor(llave)}
          >
            <LinearGradient colors={value.fondo} style={estilos.opcion} />
          </TouchableOpacity>
        ))}
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
  texto: {
    marginBottom: 20,
    fontSize: 20,
  },

  opciones: {
    width: "90%",
    marginBottom: 100,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  opcion: {
    height: 75,
    width: 75,
  },
});
