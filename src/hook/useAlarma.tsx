import { useEffect, useRef } from "react";
import { Audio } from "expo-av";

type UseAlarma = {
  play: () => Promise<void>;
  pausar: () => Promise<void>;
};

const source = require("../../assets/alarma/guitarra.mp3");

export default function useAlarma(): UseAlarma {
  const guitarra = useRef(new Audio.Sound());

  const cargarGuitarra = async () => {
    await guitarra.current.loadAsync(source);
  };

  const play = async () => {
    const estado = await guitarra.current.getStatusAsync();
    if (!estado.isLoaded || estado.isPlaying) return;
    guitarra.current.setIsLoopingAsync(true);
    await guitarra.current.playAsync();
  };

  const pausar = async () => {
    const estado = await guitarra.current.getStatusAsync();
    if (!estado.isLoaded || !estado.isPlaying) return;
    guitarra.current.pauseAsync();
    guitarra.current.setPositionAsync(0);
  };

  useEffect(() => {
    cargarGuitarra();
  }, []);

  return { play, pausar };
}
