import { Pressable, StyleSheet, Text } from "react-native";
type Parametros = {
  press: () => void;
  color: string;
};

export default function DIniciar({ ...rest }: Parametros): JSX.Element {
  return (
    <Pressable onPress={rest.press} style={estilos.iniciar}>
      <Text style={[{ color: rest.color }, estilos.texto]}>Iniciar</Text>
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  iniciar: {
    height: 100,
    width: 175,
    borderRadius: 25,
    borderColor: "#ffffff",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },

  texto: {
    fontSize: 25,
  },
});
