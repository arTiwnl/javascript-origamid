// Operadores de Atribuição
// Podem funcionar como formas abreviadas 

var x = 5;
var y = 10;

x += y; // x = x + y (15)
x -= y; // x = x + y (-5)
x *= y; // x = x * y (50)

//Continua...


// Operador Ternário
// Abreviação de condicionais com IF e ELSE

var idade = 19;
var podeBeber = (idade >=18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber);
// condição ? true : false

/* Geralmente utilizado quando
precisamos atribuir um
valor para uma variável,
dependendo de uma condição */



// If Abreviado
/* Não é necessário abrir
e fechar chaves {} quando
retornamos apenas uma linha
de código */

if(podeBeber = true) console.log('Ele pode beber');

// ou

if(podeBeber = true)
    console.log('Ele pode beber');
else
    console.log('Ele não pode beber');