import { ReactNode, createContext, useContext, useState } from "react";
import useAlarma from "../hook/useAlarma";

export type ScreenContext = {
  config: boolean;
  mostrarConfig: () => void;
  sacarConfig: () => void;
  mensajeAlarma?: string;
  alarmaPausa: () => void;
  alarmaConcent: () => void;
  sacarAlarma: () => void;
  completado: boolean;
  mostrarCompletado: () => void;
  sacarCompletado: () => void;
};

const Screen = createContext<ScreenContext | undefined>(undefined);

export function useScreenContext(): ScreenContext {
  return useContext(Screen)!;
}

export default function ScreenContext(props: {
  children: ReactNode;
}): JSX.Element {
  const [config, setConfig] = useState<boolean>(false);
  const [completado, setCompletado] = useState<boolean>(false);
  const [mensajeAlarma, setMensajeAlarma] = useState<string>();
  const alarma = useAlarma();

  const alarmaPausa = (): void => {
    setMensajeAlarma("Momento de una pausa");
    alarma.play();
  };

  const alarmaConcent = (): void => {
    setMensajeAlarma("Momento de volver a concentrarse");
    alarma.play();
  };

  const sacarAlarma = (): void => {
    setMensajeAlarma(undefined);
    alarma.pausar();
  };

  const mostrarConfig = (): void => {
    setConfig(true);
  };

  const sacarConfig = (): void => {
    setConfig(false);
  };

  const mostrarCompletado = (): void => {
    setCompletado(true);
  };
  const sacarCompletado = (): void => {
    setCompletado(false);
  };

  return (
    <Screen.Provider
      value={{
        config,
        mostrarConfig,
        sacarConfig,
        mensajeAlarma,
        alarmaPausa,
        alarmaConcent,
        sacarAlarma,
        completado,
        sacarCompletado,
        mostrarCompletado,
      }}
    >
      {props.children}
    </Screen.Provider>
  );
}
