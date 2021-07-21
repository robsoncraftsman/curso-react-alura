import React, { Component } from "react";
import ListaNotas from "./components/ListaNotas";
import ListaCategorias from "./components/ListaCategorias";
import FormularioCadastro from "./components/FormularioCadastro";
import Categorias from "./data/Categorias";
import Notas from "./data/Notas";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new Notas();
  }

  render() {
    return (
      <section>
        <section className="sessao-notas">
          <FormularioCadastro
            categorias={this.categorias}
            adicionarNota={this.notas.adicionarNota.bind(this.notas)}
          />
          <section className="sessao-cadastro-notas">
            <ListaNotas
              notas={this.notas}
              excluirNota={this.notas.excluirNota.bind(this.notas)}
            />
          </section>
        </section>
        <section className="sessao-categorias">
          <ListaCategorias
            categorias={this.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria.bind(
              this.categorias
            )}
          />
        </section>
      </section>
    );
  }
}

export default App;
