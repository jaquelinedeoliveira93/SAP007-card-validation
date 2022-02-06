import validator from './validator.js';

const botaoFinalizar = document.getElementById("botao");
botaoFinalizar.addEventListener("click", verificarCartao);

function verificarCartao(event) {
  event.preventDefault()
  let numeroCartao = document.getElementById("cartao").value;
  if (numeroCartao.length >= 12 && numeroCartao.length <= 16){
    let resultado = validator.isValid(numeroCartao);
    if (resultado === true) {
      alert("Cartao de credito é valido");
    } else {
      alert("Cartao de credito é invalido")
    }
  } else {
    alert("Quantidades de digitos insuficiente")
  }
}