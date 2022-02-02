/*import validator from './validator.js';*/

const botaoFinalizar = document.getElementById("botao");
botaoFinalizar.addEventListener("click", validator);

function validator(){  
let numeroCartao = document.getElementById("cartao").value;
const digitos = Array.from(numeroCartao);
let digitosInvertidos = digitos.reverse();
const somaTotal = 0;

for (let index = 1; index < digitosInvertidos.length; index++){
  if (index % 2 === 0)
    if ((digitosInvertidos *= 2) > 9)
          digitosInvertidos -= 9;

  somaTotal += digitosInvertidos;
  return (somaTotal % 10 === 0)

if (somaTotal === 0){
    alert("CC valid");
  }else{
    aler("CC invalid");
  }
}
}

/*console.log(validator());*/