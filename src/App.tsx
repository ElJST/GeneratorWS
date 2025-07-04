import { NavBar } from "./components/NavBar";
import { Inicio } from "./pages/Inicio";
import { Particulas } from "./components/Particulas";
import { Routes, Route } from "react-router-dom";
import { Generator } from "./pages/Generator";
import { FormStep1 } from "./components/FormStep1";
import { FormStep2 } from "./components/FormStep2";
import { FormStep3 } from "./components/FormStep3";
import { Plantillas } from "./components/Plantillas";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <main className="w-screen h-screen ">
      <Particulas />
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route element={<Generator />}>
          <Route path="/generator/step-1" element={<FormStep1 />} />
          <Route path="/generator/step-2" element={<FormStep2 />} />
          <Route path="/generator/step-3" element={<FormStep3 />} />
          <Route path="/generator/plantillas" element={<Plantillas />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;
