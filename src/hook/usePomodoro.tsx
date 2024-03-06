import { useEffect, useState } from "react";
import useMusica from "./useMusica";
import { ScreenContext } from "../context/ScreenContext";

type UseMusica = {
  musica: boolean;
  play: () => Promise<void>;
  pausar: () => Promise<void>;
};

type UseCronometro = {
  comenzo: boolean;
  intervalo: number;
  iniciarC: boolean;
  iniciarD: boolean;
  concent: number;
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
  config: { concent: number; descanzo: number; intervalos: number },
  screen: ScreenContext
): UseCronometro {
  const [comenzo, setComenzo] = useState<boolean>(false);
  const [pausado, setPausado] = useState<boolean>(true);
  const [iniciarC, setIniciarC] = useState<boolean>(false);
  const [iniciarD, setIniciarD] = useState<boolean>(false);
  const [concent, setConcent] = useState<number>(config.concent);
  const [descanzo, setDescanzo] = useState<number>(config.descanzo);
  const [intervalo, setIntervalo] = useState<number>(config.intervalos);
  const musica = useMusica();

  const iniciarConcentracion = (): void => {
    setIniciarC(true);
    setComenzo(true);
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
    setConcent(config.concent);
    setDescanzo(config.descanzo);
  };

  const reiniciarTodo = (): void => {
    reiniciar();
    setComenzo(false);
    setIntervalo(config.intervalos);
  };

  const reducirTiempo = (): void => {
    !concent ? setDescanzo((prev) => prev - 1) : setConcent((prev) => prev - 1);
  };

  const pararMusica = async (): Promise<void> => {
    await musica.pausar();
  };

  useEffect(() => {
    if ((!iniciarC && !iniciarD) || !intervalo || pausado) return;
    if (!concent && !iniciarD) {
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
    if (!concent && !descanzo) return;
    setTimeout(reducirTiempo, delay * 1000);
  }, [iniciarC, iniciarD, concent, descanzo, pausado]);

  useEffect(() => {
    setConcent(config.concent);
  }, [config.concent]);

  useEffect(() => {
    setDescanzo(config.descanzo);
  }, [config.descanzo]);

  useEffect(() => {
    setIntervalo(config.intervalos);
  }, [config.intervalos]);

  return {
    comenzo,
    intervalo,
    iniciarC,
    iniciarD,
    concent,
    descanzo,
    iniciarConcentracion,
    iniciarDescanzo,
    musica,
    despausar,
    pausar,
    pausado,
  };
}
