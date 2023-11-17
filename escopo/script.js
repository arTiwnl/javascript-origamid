// Escopos
//O escopo evita o conflito entre nomes.





// Escopo de Função
/* Variáveis declaradas dentro de funcões não são
 acessadas fora das mesmas*/

 function mostrarCarro() {
    var carro = 'Porshe';
    console.log(carro);
 }

 mostrarCarro(); //Executa a função mostrando 'Porshe' no console
console.log(carro) // erro, carro is not defined



// Escopo de Bloco
/* Variáveis criadas com var, vazam o Bloco.
por isso com o ES6 é melhor declara variável
usando const e let, pois elas respeitam
o escopo de bloco.*/

if(true){
    var carro = 'Voyage';
    console.log(carro);
}
console.log(carro); //Carro


if(false){
    var carro = 'Parati';
    console.log(carro);
}
console.log(carro) // undefined

/* Mesmo com a condição falsa, a
variável ainda será declarada utiliozando
hoisting e o valor ficará como undefined.*/

const nome = 'Arthur'; // Não pode modificar