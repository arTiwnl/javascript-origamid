//forEach

/* Constantemente vamos selecionar uma lista de itens do DOM.
A melhor forma de interarir com os mesmo é utilizando o método
forEach.*/

const titulos = document.querySelectorAll('h1');

//Parâmetros do forEach
/* O primeiro parâmetro é o callback, ou seja, a função que será
ativada a cada item. Essa função pode receber três parâmetros:
ValorAtual, index e array.*/

titulos.forEach(function (x, y){

   console.log(x); // o item atual no loop
   console.log(y); // o número do index
   //console.log(array); // o array completo

});

