class TurmaView {
  constructor(elemento) {
    this._elemento = elemento;
  }

  _template(turma) {
    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>NOME</th>
                    <th>FREQUÊNCIA</th>
                    <th>NOTA 1</th>
                    <th>NOTA 2</th>
                    <th>MEDIA</th>
                    <th>RECUP</th>
                    <th>MFINAL</th>
                    <th>SITUAÇÂO</th>
                </tr>
            </thead>
            <tbody id="corpo">
              ${turma.alunos
                .map(
                  aluno => `
                    <tr>
                        <td>${aluno.nome}</td>
                        <td>${aluno.frequencia}</td>
                        <td>${aluno.nota1}</td>
                        <td>${aluno.nota2}</td>
                        <td>${aluno.media}</td>
                        <td>${aluno.recuperacao}</td>
                        <td>${aluno.final}</td>
                        <td>${aluno.situacao}</td>
                    </tr>`
                )
                .join("")}
            </tbody>
            <tfoot id="rodape">
            <td>Aprovados: ${
              turma.alunos.filter(aluno => aluno.situacao == "Aprovado").length
            }</td>
            <td>Reprovados: ${
              turma.alunos.filter(aluno => aluno.situacao == "Reprovado").length
            }</td>
            <td>Media Turma: ${turma.alunos
              .map(aluno => aluno.final)
              .reduce((a, b) => a + b, 0) / turma.alunos.length || 0}</td>
        </tfoot >
        </table > `;
  }

  update(turma) {
    this._elemento.innerHTML = this._template(turma);
  }
}
