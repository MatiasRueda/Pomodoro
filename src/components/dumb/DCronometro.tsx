import { StyleSheet, Text, View } from "react-native";
import { texto } from "../../auxiliar/tiempo";

type Parametros = {
  tiempo: number;
  color: string;
};

export default function DCronometro({ ...rest }: Parametros): JSX.Element {
  return (
    <View style={[{ borderColor: rest.color }, estilos.cronometro]}>
      <Text style={[{ color: rest.color }, estilos.texto]}>
        {texto(rest.tiempo)}
      </Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  cronometro: {
    height: 250,
    width: 250,
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 200,
    borderWidth: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 70,
  },
});
