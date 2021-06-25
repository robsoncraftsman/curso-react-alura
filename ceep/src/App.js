import React, { Component } from "react";
import ListaNotas from "./components/ListaNotas";
import ListaCategorias from "./components/ListaCategorias";
import FormularioCadastro from "./components/FormularioCadastro";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: ["Trabalho", "Esportes"],
    };
  }

  _criarNota(titulo, texto) {
    console.log(`Nova nota: ${titulo} - ${texto}`);

    const nota = { titulo, texto };
    const notas = this.state.notas;
    notas.push(nota);
    this.setState({ notas });
    console.log(`Nota adicionada: ${nota}`);
    console.log(this.state);
  }

  _excluirNota(index) {
    let notas = this.state.notas;
    notas.splice(index, 1);
    this.setState({ notas });
    console.log(`Nota excluída: ${index}...`);
    console.log(this.state);
  }

  _adicionarCategoria(categoria) {
    let categorias = this.state.categorias;
    categorias.push(categoria);
    this.setState({ categorias });
    console.log(`Categoria adicionada: ${categoria}`);
    console.log(this.state);
  }

  render() {
    return (
      <section>
        <section className="sessao-notas">
          <FormularioCadastro criarNota={this._criarNota.bind(this)} />
          <section className="sessao-cadastro-notas">
            <ListaNotas
              excluirNota={this._excluirNota.bind(this)}
              notas={this.state.notas}
            />
          </section>
        </section>
        <section className="sessao-categorias">
          <ListaCategorias
            categorias={this.state.categorias}
            adicionarCategoria={this._adicionarCategoria.bind(this)}
          />
        </section>
      </section>
    );
  }
}

export default App;
