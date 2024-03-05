import { ReactNode, createContext, useContext, useState } from "react";
import { Minuto } from "../types/type";

// Tiempos expresados en segundos
const configuracion: Record<string, Minuto> = {
  concentracion: { minutos: 2, segundosRestantes: 0 },
  descanzo: { minutos: 1, segundosRestantes: 0 },
};

export type ConfiguracionContext = {
  concentracion: Minuto;
  descanzo: Minuto;
  cambiarConcentracion: (nuevaConcentracion: number, minuto?: boolean) => void;
  cambiarDescanzo: (nuevoDescanzo: number, minuto?: boolean) => void;
};

const Configuracion = createContext<ConfiguracionContext | undefined>(
  undefined
);

export function useConfiguracionContext(): ConfiguracionContext {
  return useContext(Configuracion)!;
}

export default function ConfiguracionContext(props: {
  children: ReactNode;
}): JSX.Element {
  const [concentracion, setConcentracion] = useState<Minuto>(
    configuracion.concentracion
  );
  const [descanzo, setDescanzo] = useState<Minuto>(configuracion.descanzo);

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

  const cambiarDescanzo = (nuevoDescanzo: number, minuto?: boolean) => {
    setDescanzo(
      minuto
        ? { ...descanzo, minutos: nuevoDescanzo }
        : { ...descanzo, segundosRestantes: nuevoDescanzo }
    );
  };

  return (
    <Configuracion.Provider
      value={{
        concentracion,
        descanzo,
        cambiarConcentracion,
        cambiarDescanzo,
      }}
    >
      {props.children}
    </Configuracion.Provider>
  );
}
