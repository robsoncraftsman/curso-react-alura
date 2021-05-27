import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {Array.of("Trabalho", "Trabalho", "Estudo").map((categoria, index) => {
          return (
            <li key={index}>
              <p>{categoria}</p>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaNotas;
