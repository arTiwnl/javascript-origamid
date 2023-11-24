//forEach

/* Constantemente vamos selecionar uma lista de itens do DOM.
A melhor forma de interarir com os mesmo é utilizando o método
forEach.*/

const titulos = document.querySelectorAll('h1');

//Parâmetros do forEach
/* O primeiro parâmetro é o callback, ou seja, a função que será
ativada a cada item. Essa função pode receber três parâmetros:
ValorAtual, index e array.*/

titulos.forEach(function (item, index, array){

   //console.log(item); // o item atual no loop
   //console.log(index); // o número do index
   //console.log(array); // o array completo

});


//forEach & Array

/*forEach é um método de Array, alguns objetos ARRAY-LIKE possuem
este método. caso não possua, o ideal é transformá-los em uma array.*/

const titulosArray = Array.from(titulos); //Transforma em array

//Ideal de usar quando é HTML COLECTION (No caso de usar um id ou classe para puxar para cá no query selector)

titulosArray.forEach(function(item){
    console.log(item);
});

//Arrow Function

/*Sintaxe curta em relação a function expression. Basta remover a palavra chave FUNCTION e adicionar a fat arrow => após os argumentos.*/

const paragrafos = document.querySelectorAll('p');

paragrafos.forEach((item) => {
    console.log(item);
});

