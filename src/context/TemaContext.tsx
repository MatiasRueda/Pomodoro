import { ReactNode, createContext, useContext, useState } from "react";

export const temas: Record<string, Tema> = {
  calido: {
    texto: "#ffffff",
    fondo: ["#bc4e9c", "#f80759"],
  },
  blanco: {
    texto: "#000000",
    fondo: ["#fffffff"],
  },
  negro: {
    texto: "#ffffff",
    fondo: ["#000000"],
  },
};

type TemaContext = {
  tema: Tema;
  cambiarColor: (tema: keyof typeof temas) => void;
};

const Tema = createContext<TemaContext | undefined>(undefined);

export function useTemaContext(): TemaContext {
  return useContext(Tema)!;
}

export default function TemaContext(props: {
  children: ReactNode;
}): JSX.Element {
  const [tema, setTema] = useState<Tema>(temas.calido);

  const cambiarColor = (tema: keyof typeof temas): void => {
    setTema(temas[tema]);
  };

  return (
    <Tema.Provider value={{ tema, cambiarColor }}>
      {props.children}
    </Tema.Provider>
  );
}
