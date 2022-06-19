import React from "react";
import Animation from "./src/Animation/Animation";
import { LogBox } from "react-native";

export default function App() {
  LogBox.ignoreAllLogs()
  LogBox.ignoreLogs(['Warning: ...'])
  return(
    <Animation/>
  )
}
