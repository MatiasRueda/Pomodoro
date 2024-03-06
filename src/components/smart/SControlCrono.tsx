import { Fragment } from "react";
import DBoton from "../dumb/DBoton";

type Parametros = {
  press: () => void;
  color: string;
  comenzo: boolean;
  pausado: boolean;
  pausar: () => void;
  despausar: () => void;
};

export default function SControlCrono({ ...rest }: Parametros): JSX.Element {
  return (
    <Fragment>
      {!rest.comenzo ? (
        <DBoton press={rest.press} color={rest.color} texto={"Iniciar"} />
      ) : rest.pausado ? (
        <DBoton press={rest.despausar} texto="Despausar" color={rest.color} />
      ) : (
        <DBoton press={rest.pausar} texto="Pausar" color={rest.color} />
      )}
    </Fragment>
  );
}
