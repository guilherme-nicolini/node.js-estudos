const listaArgumentos = process.argv.slice(2);

console.log('------------Executando um for---------');
for(let controladorFor = 0; controladorFor < listaArgumentos.length; controladorFor++){
    console.log(`Posição ${controladorFor} Valor Lido = ${listaArgumentos[controladorFor]}`);
}+

console.log('------------Executando um While---------');
let controladorWhile = 0;
while(controladorWhile < listaArgumentos.length){
    console.log(`Posição ${controladorWhile} Valor Lido = ${listaArgumentos[controladorWhile]}`);
    controladorWhile++;
    }
    console.log('------------Executando um Do While---------');
let controladorDOWhile = 0;
do{
    console.log(`Posição ${controladorDOWhile} Valor Lido = ${listaArgumentos[controladorDOWhile]}`);
    controladorDOWhile++;
}while(controladorDOWhile < listaArgumentos.length)

console.log('------------Executando um for of-------');
for(const argumentos of listaArgumentos){
    console.log(`Valor Lido = ${argumentos}`)
}
