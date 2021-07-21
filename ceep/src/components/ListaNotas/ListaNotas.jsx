import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaNotas extends Component {
  constructor() {
    super();
    this.state = { notas: [] };
    this._notasChange = this._notasChange.bind(this);
  }

  componentDidMount() {
    this.props.notas.subscribe(this._notasChange);
  }

  componentWillUnmount() {
    this.props.notas.unsubscribe(this._notasChange);
  }

  _notasChange(notas) {
    console.log(`Notas alteradas: ${notas}`);
    this.setState({ ...this.state, notas });
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li key={index}>
              <CardNota
                excluirNota={this.props.excluirNota}
                titulo={nota.titulo}
                texto={nota.texto}
                categoria={nota.categoria}
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
