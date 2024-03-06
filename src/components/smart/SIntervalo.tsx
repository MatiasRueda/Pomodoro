import { Picker } from "@react-native-picker/picker";
import range from "../../auxiliar/range";

type Parametros = {
  default: number;
  cambiar: (value: number) => void;
};

export default function SIntervalo({ ...rest }: Parametros): JSX.Element {
  return (
    <Picker
      style={{ width: 110, height: 5 }}
      selectedValue={rest.default}
      onValueChange={rest.cambiar}
    >
      {range(5)
        .map((e) => e + 1)
        .map((numero) => (
          <Picker.Item key={numero} label={numero.toString()} value={numero} />
        ))}
    </Picker>
  );
}
