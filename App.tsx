import { StyleSheet } from "react-native";
import TemaContext from "./src/context/TemaContext";
import Inicio from "./src/screens/Inicio";
import SConfig from "./src/components/smart/SConfig";
import ScreenContext from "./src/context/ScreenContext";
import SAlarma from "./src/components/smart/SAlarma";
import SCompletado from "./src/components/smart/SCompletado";
import ConfiguracionContext from "./src/context/ConfiguracionContext";

export default function App() {
  return (
    <ConfiguracionContext>
      <TemaContext>
        <ScreenContext>
          <Inicio />
          <SConfig />
          <SAlarma />
          <SCompletado />
        </ScreenContext>
      </TemaContext>
    </ConfiguracionContext>
  );
}
