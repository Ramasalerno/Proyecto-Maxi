import { Barra1 } from "./components/Navbar/Barra1"
import { Presentacion } from "./components/Presentacion/Presentacion";
import { SobreMi } from "./components/SobreMi/SobreMi";
import { Habilidades } from "./components/Habilidades/Habilidades";
import "./App.css"

function App() {
  return (
    <div>
      <Barra1/>
      <Presentacion/>
      <SobreMi/>
      <Habilidades/>
    </div>
  );
}

export default App;
