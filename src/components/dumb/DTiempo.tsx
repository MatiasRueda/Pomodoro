import { View, StyleSheet, Text } from "react-native";
import STiempoPicker from "../smart/STiempoPicker";
import { Minuto } from "../../types/type";

type Parametros = {
  default: Minuto;
  cambiar: (value: number, minutos?: boolean) => void;
};

export default function DTiempo({ ...rest }: Parametros): JSX.Element {
  return (
    <View style={estilos.contenedor}>
      <STiempoPicker
        maximo={31}
        default={rest.default.minutos}
        cambiar={rest.cambiar}
        minutos
      />
      <Text>:</Text>
      <STiempoPicker
        minimo={1}
        maximo={59}
        default={rest.default.segundosRestantes}
        cambiar={rest.cambiar}
      />
    </View>
  );
}
const estilos = StyleSheet.create({
  contenedor: {
    height: 100,
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
