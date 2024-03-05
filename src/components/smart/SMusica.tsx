import { MaterialIcons } from "@expo/vector-icons";
import { Fragment } from "react";
export default function SMusica(props: { color: string }): JSX.Element {
  return (
    <Fragment>
      {true ? (
        <MaterialIcons name="music-note" size={30} color={props.color} />
      ) : (
        <MaterialIcons name="music-off" size={30} color={props.color} />
      )}
    </Fragment>
  );
}
