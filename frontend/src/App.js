import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage";
import Createpokemon from "./pages/createPokePage";
import EditPokemon from "./pages/editPokePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createpokemon" element={<Createpokemon />} />
      <Route path="/editpokemon" element={<EditPokemon />} />
    </Routes>
  );
}

export default App;
