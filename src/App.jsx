import { useState } from "react";
import Banner from "./components/Banner";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  const xd = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <Header />
      <div>
        <Banner />
        <div id="botones">
          <Button
            id="animal"
            classTag="btn btn_prim"
            type="button"
            text="Origen Animal"
          />
          <Button
            id="plantbased"
            classTag="btn btn_sec"
            type="button"
            text="A base de plantas"
          />
          <Button
            id="glutenfree"
            classTag="btn btn_prim"
            type="button"
            text="Libre de gluten"
          />
        </div>
      </div>
      <footer></footer>
    </>
  );
}

export default App;
