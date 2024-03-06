import { ReactNode, createContext, useContext, useState } from "react";
import { Tema as TemaType } from "../types/type";

export const temas: Record<string, TemaType> = {
  calido: {
    texto: "#ffffff",
    fondo: ["#bc4e9c", "#f80759"],
  },

  blanco: {
    texto: "#000000",
    fondo: ["#cccccc", "#d1d1d1"],
  },

  negro: {
    texto: "#ffffff",
    fondo: ["#000000", "#4c4c4c"],
  },
};

type TemaContext = {
  tema: TemaType;
  cambiarColor: (tema: keyof typeof temas) => void;
};

const Tema = createContext<TemaContext | undefined>(undefined);

export function useTemaContext(): TemaContext {
  return useContext(Tema)!;
}

export default function TemaContext(props: {
  children: ReactNode;
}): JSX.Element {
  const [tema, setTema] = useState<TemaType>(temas.calido);

  const cambiarColor = (tema: keyof typeof temas): void => {
    setTema(temas[tema]);
  };

  return (
    <Tema.Provider value={{ tema, cambiarColor }}>
      {props.children}
    </Tema.Provider>
  );
}
