import React, { Component } from "react";
import "./estilo.css";

class ListaCategorias extends Component {
  _handleEnter(e) {
    if (e.keyCode === 13) {
      const categoria = e.target.value;
      this.props.adicionarCategoria(categoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul>
          {this.props.categorias.map((categoria, index) => {
            return <li key={index}>{categoria}</li>;
          })}
        </ul>
        <input
          type="Text"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEnter.bind(this)}
        />
      </section>
    );
  }
}

export default ListaCategorias;
