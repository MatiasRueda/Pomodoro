import { StyleSheet } from "react-native";
import TemaContext from "./src/context/TemaContext";
import Inicio from "./src/screens/Inicio";
import SConfig from "./src/components/smart/SConfig";
import ScreenContext from "./src/context/ScreenContext";
import SAlarma from "./src/components/smart/SAlarma";

export default function App() {
  return (
    <TemaContext>
      <ScreenContext>
        <Inicio />
        <SConfig />
        <SAlarma />
      </ScreenContext>
    </TemaContext>
  );
}
