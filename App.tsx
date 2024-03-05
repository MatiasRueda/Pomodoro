import { StyleSheet } from "react-native";
import TemaContext from "./src/context/TemaContext";
import Inicio from "./src/screens/Inicio";
import SConfig from "./src/components/smart/SConfig";
import ScreenContext from "./src/context/ScreenContext";

export default function App() {
  return (
    <TemaContext>
      <ScreenContext>
        <Inicio />
        <SConfig />
      </ScreenContext>
    </TemaContext>
  );
}
