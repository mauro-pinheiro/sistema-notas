class TurmaController {
  constructor() {
    //let $ = document.querySelector.bind(document);

    this._inputNome = document.querySelector("#nome");
    this._inputNota1 = document.querySelector("#nota-1");
    this._inputNota2 = document.querySelector("#nota-2");
    this._inputRecuperacao = document.querySelector("#nota-rec");
    this._inputFrequencia = document.querySelector("#frequencia");

    this._turma = new Turma();
    this._turmaView = new TurmaView(document.querySelector("#output"));
    this._turmaView.update(this._turma);
  }

  adiciona(event) {
    event.preventDefault();
    let aluno = this._criaAluno();
    console.log(aluno);

    this._turma.adiciona(aluno);
    this._turmaView.update(this._turma);

    this.limpaFormulario();
  }

  _criaAluno() {
    return new Aluno(
      this._inputNome.value,
      this._inputNota1.value,
      this._inputNota2.value,
      this._inputFrequencia.value,
      this._inputRecuperacao.value
    );
  }

  limpaFormulario(event) {
    event.preventDefault();
    this._inputNome.value = "";
    this._inputNota1.value = "0";
    this._inputNota2.value = "0";
    this._inputRecuperacao.value = "0";
    this._inputFrequencia.value = "0";
  }
}
