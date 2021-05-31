import React, { Component } from "react";
import ListaNotas from "./components/ListaNotas";
import FormularioCadastro from "./components/FormularioCadastro";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
    };
  }

  _criarNota(titulo, texto) {
    console.log(`Nova nota: ${titulo} - ${texto}`);

    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  _excluirNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    console.log(`Excluir nota:`);
    this.setState({ notas: arrayNotas });
  }

  render() {
    return (
      <section>
        <FormularioCadastro criarNota={this._criarNota.bind(this)} />
        <ListaNotas
          excluirNota={this._excluirNota.bind(this)}
          notas={this.state.notas}
        />
      </section>
    );
  }
}

export default App;
