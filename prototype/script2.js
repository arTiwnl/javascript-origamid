//Construtores Nativos
/* Objetos, Funções, Números, Strings e outros 
tipos de dados são criados utilizando construtores.
Esses construtores possuem um protótipo com propriedades
e métodos.*/

const pais = 'Brasil';
const cidade = new String('Rio'); //OBJ COM STRING

pais.charAt(0); //B
cidade.charAt(0); //R

String.prototype;


//É POSSÍVEL ACESSAR A FUNÇÃO DO PROTOTIPO
/*é comum, principalmente em códigos mais antigos, o uso
direto de funções do protótipo do constructor array*/

const lista = document.querySelectorAll ('li');

//transforma em array
const listaArray = Array.prototype.slice.call(lista);

//EXISTE O METODO ARRAY.FROM()