import { useEffect, useState } from "react";
import useMusica from "./useMusica";

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

const concentrar: number = 3;
const descanzar: number = 2;
const delay: number = 1;

export default function usePomodoro(
  postConcentracion: () => void,
  postDescanzo: () => void,
  completado: () => void
): UseCronometro {
  const [iniciarC, setIniciarC] = useState<boolean>(false);
  const [iniciarD, setIniciarD] = useState<boolean>(false);
  const [concentracion, setConcentracion] = useState<number>(concentrar);
  const [descanzo, setDescanzo] = useState<number>(descanzar);
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
    setConcentracion(concentrar);
    setDescanzo(descanzar);
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
      postConcentracion();
      pararMusica();
      return;
    }
    if (!descanzo) {
      if (!(intervalo - 1)) {
        completado();
        reiniciarTodo();
        return;
      }
      postDescanzo();
      reiniciar();
      setIntervalo((prev) => prev - 1);
      return;
    }
    if (!concentracion && !descanzo) return;
    setTimeout(reducirTiempo, delay * 1000);
  }, [iniciarC, iniciarD, concentracion, descanzo]);

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
