import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  render() {
    return (
      <form className="formulario-cadastro">
        <p>
          <input type="text" placeholder="Título" />
        </p>
        <p>
          <textarea cols="100" rows="5" placeholder="Escreva sua nota" />
        </p>
        <p>
          <button>Criar Nota</button>
        </p>
      </form>
    );
  }
}

export default FormularioCadastro;
