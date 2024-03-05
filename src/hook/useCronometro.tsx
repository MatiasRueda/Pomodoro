import { useEffect, useState } from "react";

type UseCronometro = {
  iniciarC: boolean;
  iniciarD: boolean;
  concentracion: number;
  descanzo: number;
  iniciarConcentracion: () => void;
  iniciarDescanzo: () => void;
};

const concentrar: number = 3;
const descanzar: number = 2;
const delay: number = 1;

export default function useCronometro(
  postConcentracion?: () => void,
  postDescanzo?: () => void
): UseCronometro {
  const [iniciarC, setIniciarC] = useState<boolean>(false);
  const [iniciarD, setIniciarD] = useState<boolean>(false);
  const [concentracion, setConcentracion] = useState<number>(concentrar);
  const [descanzo, setDescanzo] = useState<number>(descanzar);

  const iniciarConcentracion = (): void => {
    setIniciarC(true);
    setConcentracion(concentrar);
  };

  const iniciarDescanzo = (): void => {
    setIniciarD(true);
    setDescanzo(descanzar);
  };

  const reiniciar = (): void => {
    setIniciarC(false);
    setConcentracion(concentrar);
    setDescanzo(descanzar);
  };

  const reducirTiempo = (): void => {
    !concentracion
      ? setDescanzo((prev) => prev - 1)
      : setConcentracion((prev) => prev - 1);
  };

  useEffect(() => {
    if (!iniciarC) return;
    if (!concentracion && postConcentracion) {
      postConcentracion();
      return;
    }
    if (!descanzo && postDescanzo) {
      postDescanzo();
      return;
    }
    if (!concentracion && !descanzo) return;
    console.log("El tiempo esta bajando");
    setTimeout(reducirTiempo, delay * 1000);
  }, [iniciarC, concentracion, descanzo]);

  return {
    iniciarC,
    iniciarD,
    concentracion,
    descanzo,
    iniciarConcentracion,
    iniciarDescanzo,
  };
}
