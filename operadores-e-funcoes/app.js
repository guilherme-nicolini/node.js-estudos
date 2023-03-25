const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const validarNumeroInformado = (numero) => {
    const resultado = Number.parseFloat(numero)
    if (!resultado) {
        console.log('Número informado não é válido');

    }
    return resultado
}

const validarOperador = (operador) => {
    switch (operador) {
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador;
        default:
            console.log("Operador inválido meu bom. Minha ajuda ai 😉 ");
            return null;
    }
}

readLine.question('Digite um número por favor:', (numero1) => {
    const numeroValidado1 = validarNumeroInformado(numero1);

    if (numeroValidado1) {
        readLine.question('Digite outro número por favor:', (numero2) => {
            const numeroValidado2 = validarNumeroInformado(numero2);
            if (numeroValidado2) {
                readLine.question('Por favor digite o operador:', (operador) => {
                    const operadorValidado = validarOperador(operador);
                    if (operadorValidado) {
                        switch (operadorValidado) {
                            case '+': console.log(`operador selecionado adição resultado ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`)
                                break;
                            case '-': console.log(`operador selecionado subtração resultado ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}`)
                                break;
                            case '*': console.log(`operador selecionado multiplicação resultado ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`)
                                break;
                            case '/': console.log(`operador selecionado divisão resultado ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`)
                                break;
                            case '%': console.log(`operador selecionado módulo resultado ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`)
                                break;
                            default: break;

                        }
                    }
                });
            }
        });
    }
})
