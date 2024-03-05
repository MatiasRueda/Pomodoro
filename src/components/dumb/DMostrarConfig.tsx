import { FontAwesome5 } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

type Parametros = {
  press: () => void;
  color: string;
};

export default function DConfig({ ...rest }: Parametros): JSX.Element {
  return (
    <Pressable style={estilos.contenedor} onPress={rest.press}>
      <FontAwesome5 name="cog" size={24} color={rest.color} />
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    alignItems: "center",
    justifyContent: "center",
  },
});
