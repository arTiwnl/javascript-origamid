//ARRAY

//É um grupo de valores geralmente relacionados. Servem para guardamos diferentes valores em uma única variável.


var videoGames = ['Switch', 'PS4', 'Xbox'];

videoGames[0] // Switch
videoGames[2] // Xbox

//Métodos e Propriedades de um Array

var lanches = ['X-Tudo' , 'X-Salada', 'Vegano'];

lanches.pop(); //Remove o último item e retorna ele
lanches.push('Burger de Lentilha'); //Adiciona ao final do array
lanches.length // 3

//FOR LOOP

for (let numero = 0; numero < 10; numero++){
    console.log(numero);
} // retorna de 0 a 9 no console

//O for loop possui 3 partes, (inicio), (condição) e (incremento)

//WHILE LOOP

var i = 0;
while (i <10){
    console.log(1);
    i++;
} // retorna de 0 a 9 no console / O for loop é o mais comum

//FOREACH

//ForEach é um método que executa uma função para cada item do Array

var pokemons = ['charmander', 'squirtle', 'pikachu'];
pokemons.forEach(function(pokemon){ //para cada um
    console.log(pokemon);
}); // o argumento item sera atribuido dinamicamente