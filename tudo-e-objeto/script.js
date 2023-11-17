var nome = 'Arthur';

var nomeMinusculo = nome.toLowerCase();

//////// ELEMENTOS DA DOM


//////// Seleciona a classe
var btn = document.querySelector('.btn');
 
btn.classList.add('branco'); // Adiciona a classe azul

btn.innerText; //Retorna valor dentro da tag

btn.addEventListener ('click', function(){   //Lambda Function
    console.log('Clicou');
});


