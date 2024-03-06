import { StyleSheet, Text, TouchableOpacity } from "react-native";
type Parametros = {
  texto: string;
  press: () => void;
  color: string;
};

export default function DBoton({ ...rest }: Parametros): JSX.Element {
  return (
    <TouchableOpacity
      onPress={rest.press}
      style={[{ borderColor: rest.color }, estilos.iniciar]}
    >
      <Text style={[{ color: rest.color }, estilos.texto]}>{rest.texto}</Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  iniciar: {
    height: 100,
    width: 175,
    borderRadius: 25,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },

  texto: {
    fontSize: 25,
  },
});
