let $ = document.querySelector.bind(document);

$("#nota-1").addEventListener("blur", () => onblur());
$("#nota-2").addEventListener("blur", () => onblur());
$("#frequencia").addEventListener("blur", () => onblur());

$("#nota-rec").disabled = true;

function onblur(event) {
  let nota1 = Number($("#nota-1").value);
  let nota2 = Number($("#nota-2").value);
  let frequencia = Number($("#frequencia").value);
  let media = (nota1 + nota2) / 2;
  // console.log(media);
  if (media >= 30 && media < 70 && frequencia >= 75) {
    $("#nota-rec").disabled = false;
  } else {
    $("#nota-rec").value = 0;
    $("#nota-rec").disabled = true;
  }
}

this._inputNome = $("#nome").value = "";
this._inputNota1 = $("#nota-1").value = 0;
this._inputNota2 = $("#nota-2").value = 0;
this._inputNotaFinal = $("#nota-rec").value = 0;
this._inputFrequencia = $("#frequencia").value = 0;
