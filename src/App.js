import React, { useState, useEffect } from "react";
import "./style.css";
/// https://sujeitoprogtamador.com/rn-api/?api=posts
function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          setNutri(json);
        });
    }

    loadApi();
  }, []);

  return (
    <div className="container">
      <header>
        <strong>react nutri</strong>
      </header>

      {nutri.map((item) => {
        return (
          <article className="posts" key={item.id}>
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa" />
            <p className="subtitulo">{item.subtitulo}</p>
            <h1>Categoria: {item.categoria}</h1>
            <a className="botao">Acessar</a>
          </article>
        );
      })}
    </div>
  );
}

export default App;
