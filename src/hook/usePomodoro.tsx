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
};

const delay: number = 1;

export default function usePomodoro(
  tiempos: { concentracion: number; descanzo: number },
  screen: ScreenContext
): UseCronometro {
  const [iniciarC, setIniciarC] = useState<boolean>(false);
  const [iniciarD, setIniciarD] = useState<boolean>(false);
  const [concentracion, setConcentracion] = useState<number>(
    tiempos.concentracion
  );
  const [descanzo, setDescanzo] = useState<number>(tiempos.descanzo);
  const [intervalo, setIntervalo] = useState<number>(2);
  const musica = useMusica();

  const iniciarConcentracion = (): void => {
    setIniciarC(true);
  };

  const iniciarDescanzo = (): void => {
    setIniciarD(true);
  };

  const reiniciar = (): void => {
    setIniciarC(false);
    setIniciarD(false);
    setConcentracion(tiempos.concentracion);
    setDescanzo(tiempos.descanzo);
  };

  const reiniciarTodo = (): void => {
    reiniciar();
    setIntervalo(2);
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
    if (!iniciarC || !intervalo) return;
    if (!concentracion && !iniciarD) {
      screen.alarmaPausa();
      pararMusica();
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
      setIntervalo((prev) => prev - 1);
      return;
    }
    if (!concentracion && !descanzo) return;
    setTimeout(reducirTiempo, delay * 1000);
  }, [iniciarC, iniciarD, concentracion, descanzo]);

  useEffect(() => {
    setConcentracion(tiempos.concentracion);
  }, [tiempos.concentracion]);

  useEffect(() => {
    setDescanzo(tiempos.descanzo);
  }, [tiempos.descanzo]);

  return {
    intervalo,
    iniciarC,
    iniciarD,
    concentracion,
    descanzo,
    iniciarConcentracion,
    iniciarDescanzo,
    musica,
  };
}
