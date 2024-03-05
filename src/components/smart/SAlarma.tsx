import { useScreenContext } from "../../context/ScreenContext";
import SPantalla from "./SPantalla";
import { Fragment } from "react";
import Alarma from "../../screens/Alarma";

export default function SAlarma(): JSX.Element {
  const screen = useScreenContext();

  return (
    <Fragment>
      {screen.mensajeAlarma && (
        <SPantalla>
          <Alarma texto={screen.mensajeAlarma!} press={screen.sacarAlarma} />
        </SPantalla>
      )}
    </Fragment>
  );
}
