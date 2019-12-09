class Turma {
    constructor() {
        this._alunos = [];
    }

    adiciona(aluno) {
        this._alunos.push(aluno);
    }

    get alunos() {
        return [].concat(this._alunos);
    }
}