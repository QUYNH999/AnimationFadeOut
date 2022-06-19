import React from "react";
// import Animation from "./src/Animation/Animation";
import AnimationScrollView from "./src/AnimationScrollView/AnimationScrollView";
import { LogBox } from "react-native";

export default function App() {
  LogBox.ignoreAllLogs()
  LogBox.ignoreLogs(['Warning: ...'])
  return(
    <AnimationScrollView/>
  )
}
