import { ReactNode, createContext, useContext, useState } from "react";
import { Minuto } from "../types/type";
import { minutosASegundos } from "../auxiliar/tiempo";

type PomoConfig = {
  concent: number;
  descanzo: number;
  intervalos: number;
};

// Tiempos expresados en segundos
const configuracion: Record<string, Minuto> = {
  concentracion: { minutos: 3, segundosRestantes: 0 },
  descanzo: { minutos: 2, segundosRestantes: 0 },
};

const configIntervalo = 3;

export type ConfiguracionContext = {
  comenzo: boolean;
  concentracion: Minuto;
  descanzo: Minuto;
  intervalo: number;
  cambiarConcentracion: (nuevaConcentracion: number, minuto?: boolean) => void;
  cambiarDescanzo: (nuevoDescanzo: number, minuto?: boolean) => void;
  cambiarIntervalo: (nuevoIntervalo: number) => void;
  siComenzo: () => void;
  noComenzo: () => void;
  pomo: PomoConfig;
};

const Config = createContext<ConfiguracionContext | undefined>(undefined);

export function useConfiguracionContext(): ConfiguracionContext {
  return useContext(Config)!;
}

export default function ConfiguracionContext(props: {
  children: ReactNode;
}): JSX.Element {
  const [concentracion, setConcentracion] = useState<Minuto>(
    configuracion.concentracion
  );
  const [comenzo, setComenzo] = useState<boolean>(false);
  const [descanzo, setDescanzo] = useState<Minuto>(configuracion.descanzo);
  const [intervalo, setIntervalo] = useState<number>(configIntervalo);
  const cambiarConcentracion = (
    nuevaConcentracion: number,
    minuto?: boolean
  ) => {
    setConcentracion(
      minuto
        ? { ...concentracion, minutos: nuevaConcentracion }
        : { ...concentracion, segundosRestantes: nuevaConcentracion }
    );
  };

  const cambiarIntervalo = (nuevoIntervalo: number) => {
    setIntervalo(nuevoIntervalo);
  };

  const siComenzo = (): void => {
    setComenzo(true);
  };

  const noComenzo = (): void => {
    setComenzo(false);
  };

  const cambiarDescanzo = (nuevoDescanzo: number, minuto?: boolean) => {
    setDescanzo(
      minuto
        ? { ...descanzo, minutos: nuevoDescanzo }
        : { ...descanzo, segundosRestantes: nuevoDescanzo }
    );
  };

  return (
    <Config.Provider
      value={{
        comenzo,
        concentracion,
        descanzo,
        intervalo,
        cambiarConcentracion,
        cambiarDescanzo,
        cambiarIntervalo,
        siComenzo,
        noComenzo,
        pomo: {
          concent: minutosASegundos(concentracion),
          descanzo: minutosASegundos(descanzo),
          intervalos: intervalo,
        },
      }}
    >
      {props.children}
    </Config.Provider>
  );
}
