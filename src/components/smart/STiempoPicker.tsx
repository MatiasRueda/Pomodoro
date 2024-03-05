import { Picker } from "@react-native-picker/picker";
import range from "../../auxiliar/range";

type Parametros = {
  default: number;
  cambiar: (value: number, minutos?: boolean) => void;
  minutos?: boolean;
  maximo?: number;
};

export default function STiempoPicker({ ...rest }: Parametros): JSX.Element {
  return (
    <Picker
      style={{ width: 110, height: 5 }}
      selectedValue={rest.default}
      onValueChange={(value) => rest.cambiar(value, rest.minutos)}
    >
      {range(rest.maximo ? rest.maximo : 61).map((numero) => (
        <Picker.Item key={numero} label={numero.toString()} value={numero} />
      ))}
    </Picker>
  );
}
