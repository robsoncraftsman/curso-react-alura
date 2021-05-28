import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor() {
    super();
    this.titulo = "";
    this.texto = "";
  }

  handleMudancaTitulo(event) {
    this.titulo = event.target.value;
  }

  handleMudancaTexto(event) {
    this.texto = event.target.value;
  }

  render() {
    return (
      <form className="formulario-cadastro">
        <p>
          <input
            type="text"
            placeholder="Título"
            onChange={this.handleMudancaTitulo.bind(this)}
          />
        </p>
        <p>
          <textarea
            cols="100"
            rows="5"
            placeholder="Escreva sua nota"
            onChange={this.handleMudancaTexto.bind(this)}
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
