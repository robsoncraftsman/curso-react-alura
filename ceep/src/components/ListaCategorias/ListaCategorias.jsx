import React, { Component } from "react";
import "./estilo.css";

class ListaCategorias extends Component {
  constructor() {
    super();
    this.state = { categorias: [] };
    this._categoriasChange = this._categoriasChange.bind(this);
  }

  componentDidMount() {
    this.props.categorias.subscribe(this._categoriasChange);
  }

  componentWillUnmount() {
    this.props.categorias.unsubscribe(this._categoriasChange);
  }

  _categoriasChange(categorias) {
    console.log(`Categorias alteradas: ${categorias}`);
    this.setState({ ...this.state, categorias });
  }

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
          {this.state.categorias.map((categoria, index) => {
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
