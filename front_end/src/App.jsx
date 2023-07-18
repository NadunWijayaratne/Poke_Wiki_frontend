import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/homePage/homePage";
import CreatePokemon from "./pages/createPage/createPokemon";
import EditPoke from "./pages/editPage/editPokemon";

function App() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="add" element={<CreatePokemon />} />
      <Route path="edit" element={<EditPoke />} />
    </Routes>
  );
}

export default App;
