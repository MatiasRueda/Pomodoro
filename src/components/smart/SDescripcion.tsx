import { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";

type Parametros = {
  color: string;
  iniciar: boolean;
  estudiar: boolean;
  descanzar: boolean;
};

export default function SDescripcion({ ...rest }: Parametros): JSX.Element {
  return (
    <View style={estilos.contenedor}>
      <Fragment>
        {!rest.iniciar ? (
          <Text style={[{ color: rest.color }, estilos.texto]}>Bienvenido</Text>
        ) : (
          <Text style={[{ color: rest.color }, estilos.texto]}>
            {rest.estudiar ? "Momento de concentrarse" : "Momento de descanzar"}
          </Text>
        )}
      </Fragment>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    height: 30,
    width: "100%",
    marginTop: 50,
  },
  texto: {
    textAlign: "center",
    fontSize: 20,
  },
});
