const validator = {
    isValid (numeroCartao){  
        let digitos = Array.from(numeroCartao);
        let digitosInvertidos = digitos.reverse();
        let somaTotal = 0;
        let dobroDigitos = 0;

        for (let index = 1; index < digitosInvertidos.length; index++){
          if (index % 2 === 1){
            digitosInvertidos[index] = digitosInvertidos[index] *= 2;
          }if (digitosInvertidos[index] > 9){
            digitosInvertidos[index] -= 9
            somaTotal += digitosInvertidos[index]
          }if (somaTotal % 10 === 0){
              return true
          }else{
              return false
          }
        }
        }
    }

export default validator;
