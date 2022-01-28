import validator from './validator.js';

let campoCartao = document.getElementById("cartao");
let numeroCartao = campoCartao.value;

const finalizar = document.getElementById("botao");
finalizar.addEventListener("click", validator);

let soma = 0;

console.log(validator);