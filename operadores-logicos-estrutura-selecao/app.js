// const { Console } = require('console');

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Esse programa vai checar se você é maior de 18 anos e tem habilitação categoria b para saber se vc pode andar de kart');
console.log('Além das suas vericações, precisamos verificar se você esta na lista de presença no horário');

readLine.question('Qual o ano do seu nascimento?', ano => {
    if (ano > 2004) {
        console.log('Você não tem 18 anos ainda meu(minha) jovem');
    } else {
        readLine.question("Você tem cnh categoria b ou acima? (Sim/Não)", temHabilitacao => {
            if (!(temHabilitacao.toUpperCase() === "SIM")) {
                console.log('Você não tem a cnh ou categoria permitida para pilotar o kart 😞 ');
            } else {
                readLine.question('Qual o seu nome ?', nome => {
                    switch (nome) {
                        case 'Maria':
                            console.log('Bora brincar Maria 😊')
                            break;
                        case 'Guilherme':
                            console.log('Ainda não está no seu horário Guilherme')
                            break;
                        case 'Cleide':
                            console.log('Bora brincar Cleide 😊')
                            break;
                        default: console.log('Você não esta identificado na lista de presenção ');
                    }

                });
            }
        })
    }
});