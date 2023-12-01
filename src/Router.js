import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Cadastro2 from "./Components/Cadastro2";
import FormCadastro from "./Components/FormCadastro";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cadastro2" element={<Cadastro2 />} />
      <Route path="/CadForm" element={<FormCadastro />} />
    </Routes>
  );
}
