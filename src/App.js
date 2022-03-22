import { Barra1 } from "./components/Navbar/Barra1"
import { Presentacion } from "./components/Presentacion/Presentacion";
import { SobreMi } from "./components/SobreMi/SobreMi";
import { Habilidades } from "./components/Skills/Habilidades";
import "./App.css"
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div>
      <Barra1/>
      <Presentacion/>
      <SobreMi/>
      <Habilidades/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
