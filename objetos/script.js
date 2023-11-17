//Objeto

var pessoa = {
    nome:'Arthur carvalho',
    idade: 20,
    profissao:'Designer',
    possuiFaculdade: false,

}

/*Acessando Objeto

pessoa.nome //Arthur Carvalho
pessoa.possuiFaculdade //false
*/

console.log(pessoa.nome, pessoa.possuiFaculdade);


//Método
//É uma propriedade que possui uma função no local do seu valor.

var quadrado = {
    lados: 4,
    area: function(lado){
        return this.lados * lado;
    },
    perimetro: function(lado){
        return this.lados * lado;
    },
}

console.log('Área do quadrado', quadrado.area(5));

//Método - Abreviar uma função
//Abreviação de area: function() {} para area(){}, no ES6+

var quadrado2 = {
    lados: 4,
    area(lado){
        return lado * this.lados;
    },
    perimetro(lado) {
        return this.lados * lado;
    }
}

console.log(quadrado2.area(5));