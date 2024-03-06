import { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MENSAJE } from "../../auxiliar/mensaje";

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
          <Text style={[{ color: rest.color }, estilos.texto]}>
            {MENSAJE.BIENVENIDA}
          </Text>
        ) : (
          <Text style={[{ color: rest.color }, estilos.texto]}>
            {rest.estudiar && MENSAJE.ESTUDIAR}
            {rest.descanzar && MENSAJE.DESCANZAR}
            {!rest.estudiar && !rest.descanzar && MENSAJE.PREPARACION}
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
