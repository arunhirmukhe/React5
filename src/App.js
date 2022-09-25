import "./styles.css";
import { useState } from "react";
export default function App() {
  const [color, setColor] = useState("dark");

  const changeColor = () =>
    color === "dark"
      ? setColor((_color) => "light")
      : setColor((_color) => "dark");

  return (
    <div className="App">
      <button onClick={() => changeColor()}>Toggle</button>
      <h1 className={color}>Hi,we are learing useState</h1>
    </div>
  );
}
