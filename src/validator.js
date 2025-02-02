const validator = {

  isValid(numeroCartao) {

    let digitos = Array.from(numeroCartao);
    let digitosInvertidos = digitos.reverse();
    let soma = 0;

    for (let index = 0; index < digitosInvertidos.length; index++) {
      if (index % 2 != 0) {
        digitosInvertidos[index] = (Number(digitosInvertidos[index])) * 2
        if (digitosInvertidos[index] > 9) {
          digitosInvertidos[index] = digitosInvertidos[index] - 9
          soma = soma + Number(digitosInvertidos[index])
        } else {
          soma = soma + (digitosInvertidos[index])
        }
      } else {
        soma = soma + Number(digitosInvertidos[index])
      }
    }
    if (soma % 10 === 0) {
      return true

    } else {
      return false
    }
  },

  maskify(numeroCartao) {
    let mascara = ""
    for (let index = 0; index < numeroCartao.length; index++) {
      if (index < numeroCartao.length - 4) {
        mascara = mascara + "#"
      } else {
        mascara = mascara + numeroCartao.charAt(index)
      }
    }
    return mascara
  },
};

export default validator;
