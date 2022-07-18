import "./App.css";
import { Route, Routes } from "react-router-dom";

//*Importacion de componentes
import Principal from "./components/Principal";
import Acceso from "./components/Acceso";
import Administracion from "./components/Administracion";
import Caja from "./components/Caja";
import OrdenMesero from "./components/OrdenMesero";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/acceso" element={<Acceso />} />
        <Route path="/administracion" element={<Administracion />} />
        <Route path="/caja" element={<Caja />} />
        <Route path="/orden-mesero" element={<OrdenMesero />} />
        <Route path="*" element={<h1>Ruta 404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
