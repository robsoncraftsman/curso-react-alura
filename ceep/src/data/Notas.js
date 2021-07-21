export default class Notas {
  constructor() {
    this.data = [];
    this._inscritos = [];
  }

  adicionarNota(titulo, texto, categoria) {
    const nota = new Nota(titulo, texto, categoria);
    console.log(this);
    this.data.push(nota);
    console.log(`Nota adicionada: ${titulo} - ${texto} - ${categoria}`);
    this.notify();
  }

  excluirNota(index) {
    this.data.splice(index, 1);
    console.log(`Nota excluída: ${index}`);
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

class Nota {
  constructor(titulo, texto, categoria) {
    this.titulo = titulo;
    this.texto = texto;
    this.categoria = categoria;
  }
}
