import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header></Header>
      <Banner/>
      <div id="botones">
        <Button
          id="animal"
          classTag="button"
          type="button"
          text="Origen Animal"
        />
        <Button
          id="plantbased"
          classTag="button"
          type="button"
          text="A base de plantas"
        />
        <Button
          id="glutenfree"
          classTag="button"
          type="button"
          text="Libre de gluten"
        />
      </div>
    </div>
  );
}

export default App;
