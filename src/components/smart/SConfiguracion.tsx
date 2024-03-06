import { useState } from "react";
import STema from "./STema";
import SConfigurar from "./SConfigurar";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function SConfiguracion(): JSX.Element {
  const [temaScreen, setTemaScreen] = useState<boolean>(false);

  const mostrarTema = (): void => {
    setTemaScreen(true);
  };

  const sacarTema = (): void => {
    setTemaScreen(false);
  };
  return (
    <View style={estilos.contenedor}>
      <View style={estilos.opciones}>
        <TouchableOpacity onPress={sacarTema} style={estilos.opcion}>
          <Text>Config</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={mostrarTema} style={estilos.opcion}>
          <Text>Tema</Text>
        </TouchableOpacity>
      </View>
      {temaScreen ? <STema /> : <SConfigurar />}
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
  },

  opciones: {
    marginTop: 30,
    height: 60,
    width: 300,
    flexDirection: "row",
    borderWidth: 2,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopColor: "#000000",
    borderBottomColor: "#000000",
  },

  opcion: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
});
