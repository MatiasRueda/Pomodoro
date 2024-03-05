import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

export default function DSalir(props: { press: () => void }): JSX.Element {
  return (
    <View style={estilos.contenedor}>
      <AntDesign
        style={estilos.salir}
        onPress={props.press}
        name="close"
        size={30}
        color="#000000"
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    marginTop: 15,
    paddingRight: 15,
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  salir: {},
});
