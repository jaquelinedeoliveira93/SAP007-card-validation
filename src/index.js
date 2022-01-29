//import validator from './validator.js';//

const botaoFinalizar = document.getElementById("botao");
botaoFinalizar.addEventListener("click", construindoArray);

function construindoArray(){
    let numeroCartao = document.getElementById("cartao").value;

    for (let index = 0; index < numeroCartao.length; index++) {
        let conjuntoDigitos = numeroCartao[index];
        let digitosConvertidos = conjuntoDigitos.toString().splint("").reverse();
        console.log(digitosConvertidos);
    }

}

//console.log(validator());//