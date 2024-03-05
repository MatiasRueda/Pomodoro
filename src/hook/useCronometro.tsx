import { useEffect, useState } from "react";

type UseCronometro = {
  iniciar: boolean;
  concentracion: number;
  descanzo: number;
  iniciarConcentracion: () => void;
};

const concentrar: number = 3;
const descanzar: number = 2;
const delay: number = 1;

export default function useCronometro(funcion?: () => void): UseCronometro {
  const [iniciar, setIniciar] = useState<boolean>(false);
  const [concentracion, setConcentracion] = useState<number>(concentrar);
  const [descanzo, setDescanzo] = useState<number>(descanzar);

  const iniciarConcentracion = (): void => {
    setIniciar(true);
    setConcentracion(concentrar);
  };

  const reiniciar = (): void => {
    setIniciar(false);
    setConcentracion(concentrar);
    setDescanzo(descanzar);
  };

  const reducirTiempo = (): void => {
    !concentracion
      ? setDescanzo((prev) => prev - 1)
      : setConcentracion((prev) => prev - 1);
  };

  useEffect(() => {
    if (!iniciar) return;
    if (!descanzo && funcion) funcion();
    if (!concentracion && !descanzo) return;
    console.log("El tiempo esta bajando");
    setTimeout(reducirTiempo, delay * 1000);
  }, [iniciar, concentracion, descanzo]);

  return {
    iniciar,
    concentracion,
    descanzo,
    iniciarConcentracion,
  };
}
