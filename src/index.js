import validator from './validator.js';

const botaoFinalizar = document.getElementById("botao");
botaoFinalizar.addEventListener("click", finalizar);



function finalizar(){
let numeroCartao = document.getElementById("cartao").value;
let resultado = validator.isValid(numeroCartao);
if (resultado === true){
  alert("cc is valid");
}else{
  alert("cc invalido")
}
}
