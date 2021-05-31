import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handleMudancaTitulo(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
  }

  _handleMudancaTexto(event) {
    event.stopPropagation();
    this.texto = event.target.value;
  }

  _criarNota(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form
        className="formulario-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
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
