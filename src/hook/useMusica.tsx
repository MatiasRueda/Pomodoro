import { useEffect, useRef, useState } from "react";
import { Audio } from "expo-av";

type UseMusica = {
  musica: boolean;
  play: () => Promise<void>;
  pausar: () => Promise<void>;
};

const source = require("../../assets/musica/lofi.mp3");

export default function useMusica(): UseMusica {
  const [musica, setMusica] = useState<boolean>(false);
  const lofi = useRef(new Audio.Sound());

  const cargarLofi = async () => {
    await lofi.current.loadAsync(source);
  };

  const play = async () => {
    setMusica(true);
    const estado = await lofi.current.getStatusAsync();
    if (!estado.isLoaded || estado.isPlaying) return;
    lofi.current.setIsLoopingAsync(true);
    await lofi.current.playAsync();
  };

  const pausar = async () => {
    setMusica(false);
    const estado = await lofi.current.getStatusAsync();
    if (!estado.isLoaded || !estado.isPlaying) return;
    lofi.current.pauseAsync();
  };

  useEffect(() => {
    cargarLofi();
  }, []);

  return { musica, play, pausar };
}
