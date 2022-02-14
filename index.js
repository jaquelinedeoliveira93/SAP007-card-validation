import validator from './validator.js';

const botaoFinalizar = document.getElementById("botao");
botaoFinalizar.addEventListener("click", verificarCartao);

function verificarCartao(event) {
  event.preventDefault()
  const numeroCartao = document.getElementById("cartao").value;
  const mascara = validator.maskify(numeroCartao);
  const msgErro = document.getElementById("erro");
  if (numeroCartao.length >= 12 && numeroCartao.length <= 16){
    let resultado = validator.isValid(numeroCartao);
    if (resultado === true) {
      window.location.href = "pagfinal.html"
    } else {
      msgErro.textContent = mascara + " Cartão de crédito inválido"
    }
  } else {
    msgErro.textContent = "Quantidade de números insuficientes"
  }
}