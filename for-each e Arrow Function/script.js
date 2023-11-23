//forEach

/* Constantemente vamos selecionar uma lista de itens do DOM.
A melhor forma de interarir com os mesmo é utilizando o método
forEach.*/

const titulos = document.querySelectorAll('h1');

titulos.forEach(function(item){
    console.log(item);
})


//Parâmetros do forEach
/* O primeiro parâmetro é o callback, ou seja, a função que será
ativada a cada item. Essa função pode receber três parâmetros:
ValorAtual, index e array.*/

titulos.forEach(function (valorAtual, index, array){

    console.log(item); // o item atual no loop
    console.log(index); // o número do index
    console.log(array); // o array completo

});