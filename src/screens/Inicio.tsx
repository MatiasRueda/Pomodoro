import { LinearGradient } from "expo-linear-gradient";
import { useTemaContext } from "../context/TemaContext";
import { StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";
import DMostrarConfig from "../components/dumb/DMostrarConfig";
import { useScreenContext } from "../context/ScreenContext";
import DCronometro from "../components/dumb/DCronometro";
import SMusica from "../components/smart/SMusica";
import SDescripcion from "../components/smart/SDescripcion";
import usePomodoro from "../hook/usePomodoro";
import { useConfiguracionContext } from "../context/ConfiguracionContext";
import SControlCrono from "../components/smart/SControlCrono";

export default function Inicio(): JSX.Element {
  const info = useTemaContext();
  const screen = useScreenContext();
  const config = useConfiguracionContext();
  const crono = usePomodoro(config.pomo, { ...screen });
  const cronoActual = !crono.concent ? crono.descanzo : crono.concent;

  const pressActual = !crono.concent
    ? crono.iniciarDescanzo
    : crono.iniciarConcentracion;

  const mostrarConfig = (): void => {
    screen.mostrarConfig();
    crono.comenzo ? config.siComenzo() : config.noComenzo();
  };

  return (
    <LinearGradient colors={info.tema.fondo} style={estilos.contenedor}>
      <Text style={[{ color: info.tema.texto }, estilos.texto]}>Pomodoro</Text>
      <Text style={[{ color: info.tema.texto }, estilos.textoIntervalos]}>
        Intervalos restantes: {crono.intervalo}
      </Text>
      <SDescripcion
        color={info.tema.texto}
        iniciar={crono.comenzo}
        estudiar={crono.iniciarC}
        descanzar={crono.iniciarD}
      />
      <DCronometro color={info.tema.texto} tiempo={cronoActual} />
      <View style={estilos.opciones}>
        <SMusica {...crono.musica} color={info.tema.texto} />
        <SControlCrono
          color={info.tema.texto}
          press={pressActual}
          pausado={crono.pausado}
          pausar={crono.pausar}
          despausar={crono.despausar}
          comenzo={crono.iniciarC || crono.iniciarD}
        />
        <DMostrarConfig color={info.tema.texto} press={mostrarConfig} />
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

  textoIntervalos: {
    marginTop: 20,
    width: "100%",
    textAlign: "center",
    fontSize: 20,
  },
});
