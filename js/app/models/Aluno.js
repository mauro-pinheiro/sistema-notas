class Aluno {
  constructor(nome, nota1, nota2, frequencia, recuperacao) {
    this._nome = nome;
    this._nota1 = Number(nota1);
    this._nota2 = Number(nota2);
    this._frequencia = Number(frequencia);
    this._media = (Number(nota1) + Number(nota2)) / 2;
    this._recuperacao = 0;
    this._final = 0;

    if (this._frequencia < 75) {
      this._situacao = "Reprovado";
      this._final = this._media;
    } else if (this._media >= 70) {
      this._situacao = "Aprovado";
      this._final = this._media;
    } else if (this._media >= 30) {
      this._recuperacao = recuperacao;
      this._final = (Number(this._media) + Number(recuperacao)) / 2;
      if (this._final >= 50) {
        this._situacao = "Aprovado";
      } else {
        this._situacao = "Reprovado";
      }
    } else {
      this._situacao = "Reprovado";
      this._final = this._media;
    }

    Object.freeze(this);
  }

  get nome() {
    return this._nome;
  }
  get nota1() {
    return this._nota1;
  }
  get nota2() {
    return this._nota2;
  }
  get media() {
    return this._media;
  }
  get recuperacao() {
    return this._recuperacao;
  }
  get final() {
    return this._final;
  }
  get frequencia() {
    return this._frequencia;
  }
  get situacao() {
    return this._situacao;
  }
}
