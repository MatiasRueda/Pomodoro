import { ReactNode, createContext, useContext, useState } from "react";
import useAlarma from "../hook/useAlarma";

type ScreenContext = {
  config: boolean;
  mostrarConfig: () => void;
  sacarConfig: () => void;
  mensajeAlarma?: string;
  mostrarAlarma: () => void;
  sacarAlarma: () => void;
};

const Screen = createContext<ScreenContext | undefined>(undefined);

export function useScreenContext(): ScreenContext {
  return useContext(Screen)!;
}

export default function ScreenContext(props: {
  children: ReactNode;
}): JSX.Element {
  const [config, setConfig] = useState<boolean>(false);
  const [mensajeAlarma, setMensajeAlarma] = useState<string>();
  const alarma = useAlarma();

  const mostrarAlarma = () => {
    setMensajeAlarma("Momento de una pausa");
    alarma.play();
  };

  const sacarAlarma = () => {
    setMensajeAlarma(undefined);
    alarma.pausar();
  };

  const mostrarConfig = () => {
    setConfig(true);
  };

  const sacarConfig = () => {
    setConfig(false);
  };

  return (
    <Screen.Provider
      value={{
        config,
        mostrarConfig,
        sacarConfig,
        mensajeAlarma,
        mostrarAlarma,
        sacarAlarma,
      }}
    >
      {props.children}
    </Screen.Provider>
  );
}
