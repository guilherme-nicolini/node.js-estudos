const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const validarNumeroInformado = (numero) => {
    try {
        return Number.parseFloat(numero)
    } catch (error) {
        console.log('Número informado não é válido');

    }
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
                readLine.question('Por favor digite o operador', (operador) => {
                    const operadorValidado = validarOperador(operador);
                    if(operadorValidado) {
                        switch(operadorValidado){
                           case '+': console.log(`operador selecionado adicao resulatso ${numeroValidado1}  + ${numeroValidado2}`)
                        }
                    }
                });
            }
        });
    }
})
