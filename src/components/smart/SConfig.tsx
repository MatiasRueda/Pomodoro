import { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useScreenContext } from "../../context/ScreenContext";
import SPantalla from "./SPantalla";
import Config from "../../screens/Config";

export default function SConfig(): JSX.Element {
  const screen = useScreenContext();

  return (
    <Fragment>
      {screen.config && (
        <SPantalla>
          <Config />
        </SPantalla>
      )}
    </Fragment>
  );
}
