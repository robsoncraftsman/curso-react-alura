import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "";
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

  _handleMudancaTitulo(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
  }

  _handleMudancaTexto(event) {
    event.stopPropagation();
    this.texto = event.target.value;
  }

  _handleMudancaCategoria(event) {
    event.stopPropagation();
    this.categoria = event.target.value;
    console.log(this.categoria);
  }

  _adicionarNota(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.adicionarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form
        className="formulario-cadastro"
        onSubmit={this._adicionarNota.bind(this)}
      >
        <p>
          <select onChange={this._handleMudancaCategoria.bind(this)}>
            {this.state.categorias.map((categoria, index) => {
              return <option key={index}>{categoria}</option>;
            })}
          </select>
        </p>
        <p>
          <input
            type="text"
            placeholder="Título"
            onChange={this._handleMudancaTitulo.bind(this)}
          />
        </p>
        <p>
          <textarea
            cols="100"
            rows="5"
            placeholder="Escreva sua nota"
            onChange={this._handleMudancaTexto.bind(this)}
          />
        </p>
        <p>
          <button>Criar Nota</button>
        </p>
      </form>
    );
  }
}

export default FormularioCadastro;
