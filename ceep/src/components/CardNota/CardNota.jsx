import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as DeleteSVG } from "../../images/delete.svg";

class CardNota extends Component {
  _excluirNota() {
    this.props.excluirNota(this.props.index);
  }

  render() {
    return (
      <section className="card-nota">
        <header>
          <h3>{this.props.titulo}</h3>
          <DeleteSVG onClick={this._excluirNota.bind(this)} />
        </header>
        <p>{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
