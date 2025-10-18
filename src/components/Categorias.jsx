const Categorias = ({ numCategoriaSelecionada, setNumCategoriaSelecionar }) => {
  return (
    <div className="categorias">
      <p
        className={
          "categoria" +
          (numCategoriaSelecionada === 0 ? " categoria--selecionada" : "")
        }
        onClick={() => {
          setNumCategoriaSelecionar(0);
        }}
      >
        Pratos Principais
      </p>

      <p
        className={
          "categoria" +
          (numCategoriaSelecionada === 1 ? " categoria--selecionada" : "")
        }
        onClick={() => {
          setNumCategoriaSelecionar(1);
        }}
      >
        Sobremesas
      </p>

      <p
        className={
          "categoria" +
          (numCategoriaSelecionada === 2 ? " categoria--selecionada" : "")
        }
        onClick={() => {
          setNumCategoriaSelecionar(2);
        }}
      >
        Bebidas
      </p>
    </div>
  );
};

export default Categorias;
