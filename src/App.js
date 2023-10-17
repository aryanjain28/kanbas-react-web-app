import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Kanbas from "./Kanbas";
import Labs from "./Labs";

function App() {
  return (
    <BrowserRouter>
      <Labs />
      <Kanbas />
    </BrowserRouter>
  );
}

export default App;
