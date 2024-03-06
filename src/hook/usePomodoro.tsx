import { useEffect, useState } from "react";
import useMusica from "./useMusica";
import { ScreenContext } from "../context/ScreenContext";

type UseMusica = {
  musica: boolean;
  play: () => Promise<void>;
  pausar: () => Promise<void>;
};

type UseCronometro = {
  intervalo: number;
  iniciarC: boolean;
  iniciarD: boolean;
  concentracion: number;
  descanzo: number;
  iniciarConcentracion: () => void;
  iniciarDescanzo: () => void;
  musica: UseMusica;
  pausado: boolean;
  pausar: () => void;
  despausar: () => void;
};

const delay: number = 1;

export default function usePomodoro(
  config: { concentracion: number; descanzo: number; intervalos: number },
  screen: ScreenContext
): UseCronometro {
  const [pausado, setPausado] = useState<boolean>(true);
  const [iniciarC, setIniciarC] = useState<boolean>(false);
  const [iniciarD, setIniciarD] = useState<boolean>(false);
  const [concentracion, setConcentracion] = useState<number>(
    config.concentracion
  );
  const [descanzo, setDescanzo] = useState<number>(config.descanzo);
  const [intervalo, setIntervalo] = useState<number>(config.intervalos);
  const musica = useMusica();

  const iniciarConcentracion = (): void => {
    setIniciarC(true);
    setPausado(false);
  };

  const pausar = (): void => {
    setPausado(true);
  };

  const despausar = (): void => {
    setPausado(false);
  };

  const iniciarDescanzo = (): void => {
    setIniciarD(true);
    setPausado(false);
  };

  const reiniciar = (): void => {
    setIniciarC(false);
    setIniciarD(false);
    setPausado(false);
    setConcentracion(config.concentracion);
    setDescanzo(config.descanzo);
  };

  const reiniciarTodo = (): void => {
    reiniciar();
    setIntervalo(config.intervalos);
  };

  const reducirTiempo = (): void => {
    !concentracion
      ? setDescanzo((prev) => prev - 1)
      : setConcentracion((prev) => prev - 1);
  };

  const pararMusica = async (): Promise<void> => {
    await musica.pausar();
  };

  useEffect(() => {
    if ((!iniciarC && !iniciarD) || !intervalo || pausado) return;
    if (!concentracion && !iniciarD) {
      screen.alarmaPausa();
      pararMusica();
      setIniciarC(false);
      return;
    }
    if (!descanzo) {
      if (!(intervalo - 1)) {
        screen.mostrarCompletado();
        reiniciarTodo();
        return;
      }
      screen.alarmaConcent();
      reiniciar();
      setIniciarD(false);
      setIntervalo((prev) => prev - 1);
      return;
    }
    if (!concentracion && !descanzo) return;
    setTimeout(reducirTiempo, delay * 1000);
  }, [iniciarC, iniciarD, concentracion, descanzo, pausado]);

  useEffect(() => {
    setConcentracion(config.concentracion);
  }, [config.concentracion]);

  useEffect(() => {
    setDescanzo(config.descanzo);
  }, [config.descanzo]);

  useEffect(() => {
    setIntervalo(config.intervalos);
  }, [config.intervalos]);

  return {
    intervalo,
    iniciarC,
    iniciarD,
    concentracion,
    descanzo,
    iniciarConcentracion,
    iniciarDescanzo,
    musica,
    despausar,
    pausar,
    pausado,
  };
}
