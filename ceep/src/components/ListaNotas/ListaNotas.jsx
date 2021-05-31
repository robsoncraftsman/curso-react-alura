import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li key={index}>
              <CardNota
                excluirNota={this.props.excluirNota}
                titulo={nota.titulo}
                texto={nota.texto}
                index={index}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaNotas;
