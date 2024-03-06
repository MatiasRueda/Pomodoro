import { Minuto } from "../types/type";

export function segundosAMinutos(segundos: number): Minuto {
  const minutos: number = Math.floor(segundos / 60);
  const segundosRestantes: number = segundos % 60;
  return { minutos, segundosRestantes };
}

export function minutosASegundos(minutos: Minuto): number {
  return minutos.minutos * 60 + minutos.segundosRestantes;
}

function menorADiez(numero: number): string {
  return numero < 10 ? `0${numero}` : numero.toString();
}

export function texto(segundos: number): string {
  const minutos = segundosAMinutos(segundos);
  return `${menorADiez(minutos.minutos)}:${menorADiez(
    minutos.segundosRestantes
  )}`;
}
