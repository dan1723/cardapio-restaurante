import "./App.css";
import Categorias from "./components/Categorias";
import Cards from "./components/Cards";
import Banner from "./components/Banner";
import { useState } from "react";

function App() {
  // Hook
  // Variável de Estado
  const [numCategoriaSelecionada, setNumCategoriaSelecionar] = useState(0);

  return (
    <div className="container">
      <Banner />

      <Categorias
        numCategoriaSelecionada={numCategoriaSelecionada}
        setNumCategoriaSelecionar={setNumCategoriaSelecionar}
      />

      <Cards numCategoriaSelecionada={numCategoriaSelecionada}/>
    </div>
  );
}

export default App;
