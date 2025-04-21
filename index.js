import { ExpoRoot } from "expo-router";
import { registerRootComponent } from "expo";

const ctx = require.context("./App");
export default function App() {
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
