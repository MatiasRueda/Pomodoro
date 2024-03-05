import { MaterialIcons } from "@expo/vector-icons";
import { Fragment } from "react";

type Parametros = {
  color: string;
  musica: boolean;
  play: () => Promise<void>;
  pausar: () => Promise<void>;
};

export default function SMusica({ ...rest }: Parametros): JSX.Element {
  return (
    <Fragment>
      {rest.musica ? (
        <MaterialIcons
          name="music-note"
          size={30}
          color={rest.color}
          onPress={rest.pausar}
        />
      ) : (
        <MaterialIcons
          name="music-off"
          size={30}
          color={rest.color}
          onPress={rest.play}
        />
      )}
    </Fragment>
  );
}
