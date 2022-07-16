import "./App.css";
import { Route, Routes } from "react-router-dom";

//*Importacion de componentes
import Principal from "./components/Principal";
import Acceso from "./components/Acceso";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/acceso" element={<Acceso />} />
        <Route path="*" element={<h1>Ruta 404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
