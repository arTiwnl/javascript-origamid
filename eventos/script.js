/* Usamos o addEventListener 
para adicionar um evento*/

/*Adiciona uma função chamada callback,
que será ativada assim que um certo 
evento ocorrer nesse elemento.*/


const  btn = document.querySelector('a');

 //elemento.addEventListener(event, callback, options)

 btn.addEventListener('click', function() {
    console.log('CLicou');
 });

 //CALLBACK

 /* É uma boa práticar separar a função
 de callback do addEvent Listener*/

 btn.addEventListener('click', callback);

 function callback(){
    console.log('callbackzada');
 };