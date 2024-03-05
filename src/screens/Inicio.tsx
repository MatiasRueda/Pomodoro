import { LinearGradient } from "expo-linear-gradient";
import { useTemaContext } from "../context/TemaContext";
import { StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";
import DMostrarConfig from "../components/dumb/DMostrarConfig";
import { useScreenContext } from "../context/ScreenContext";
import DCronometro from "../components/dumb/DCronometro";
import DIniciar from "../components/dumb/DIniciar";
import SMusica from "../components/smart/SMusica";
import useCronometro from "../hook/useCronometro";
import SDescripcion from "../components/smart/SDescripcion";
import useMusica from "../hook/useMusica";

export default function Inicio(): JSX.Element {
  const info = useTemaContext();
  const screen = useScreenContext();
  const musica = useMusica();
  const crono = useCronometro(
    () => {
      musica.pausar();
      screen.mostrarAlarma();
    },
    () => {
      console.log("Termino la pausa");
    }
  );

  return (
    <LinearGradient colors={info.tema.fondo} style={estilos.contenedor}>
      <Text style={[{ color: info.tema.texto }, estilos.texto]}>Pomodoro</Text>
      <SDescripcion
        color={info.tema.texto}
        iniciar={crono.iniciarC}
        estudiar={!!crono.concentracion}
        descanzar={!!crono.descanzo}
      />
      <DCronometro
        color={info.tema.texto}
        tiempo={!crono.concentracion ? crono.descanzo : crono.concentracion}
      />
      <View style={estilos.opciones}>
        <SMusica {...musica} color={info.tema.texto} />
        <DIniciar color={info.tema.texto} press={crono.iniciarConcentracion} />
        <DMostrarConfig color={info.tema.texto} press={screen.mostrarConfig} />
      </View>
    </LinearGradient>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  opciones: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  texto: {
    width: "100%",
    textAlign: "center",
    fontSize: 35,
  },
});
