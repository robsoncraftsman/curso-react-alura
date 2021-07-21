export default class Categorias {
  constructor() {
    this.data = [];
    this._inscritos = [];
  }

  adicionarCategoria(categoria) {
    console.log(this);
    this.data.push(categoria);
    console.log(`Categoria adicionada: ${categoria}`);
    this.notify();
  }

  subscribe(func) {
    this._inscritos.push(func);
  }

  notify() {
    this._inscritos.forEach((func) => func(this.data));
  }

  unsubscribe(func) {
    this._inscritos = this._inscritos.filter((f) => f !== func);
  }
}
