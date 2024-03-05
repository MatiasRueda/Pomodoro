import { ReactNode, createContext, useContext, useState } from "react";

type ScreenContext = {
  config: boolean;
  mostrarConfig: () => void;
  sacarConfig: () => void;
};

const Screen = createContext<ScreenContext | undefined>(undefined);

export function useScreenContext(): ScreenContext {
  return useContext(Screen)!;
}

export default function ScreenContext(props: {
  children: ReactNode;
}): JSX.Element {
  const [config, setConfig] = useState<boolean>(false);

  const sacarConfig = () => {
    setConfig(false);
  };

  const mostrarConfig = () => {
    setConfig(true);
  };

  return (
    <Screen.Provider value={{ config, mostrarConfig, sacarConfig }}>
      {props.children}
    </Screen.Provider>
  );
}
