import validator from './validator.js';

const botaoFinalizar = document.getElementById("botao");
botaoFinalizar.addEventListener("click", verificarCartao);

function verificarCartao(event) {
  event.preventDefault()
  let numeroCartao = document.getElementById("cartao").value;
  let mascara = validator.maskify(numeroCartao);
  let msgCartaoInvalido = document.getElementById("invalido");
let msgQntdDigitos = document.getElementById("qntdDigitos");
  if (numeroCartao.length >= 12 && numeroCartao.length <= 16){
    let resultado = validator.isValid(numeroCartao);
    if (resultado === true) {
      window.location.href = "pagfinal.html"
    } else {
      msgCartaoInvalido.textContent = mascara + " Cartão de crédito inválido"
    }
  } else {
    msgQntdDigitos.textContent = "Quantidade de números insuficiente"
  }
}