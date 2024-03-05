import { Fragment } from "react";
import SPantalla from "./SPantalla";
import Completado from "../../screens/Completado";
import { useScreenContext } from "../../context/ScreenContext";

export default function SCompletado(): JSX.Element {
  const screen = useScreenContext();
  return (
    <Fragment>
      {screen.completado && (
        <SPantalla>
          <Completado press={screen.sacarCompletado} />
        </SPantalla>
      )}
    </Fragment>
  );
}
