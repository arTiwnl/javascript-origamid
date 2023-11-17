// Crie uma função para verificar se um valor é Truthy

/* JEITO ERRADO
function Truthy(valor){
    if (valor > 1){
        return 'valor verdadeiro';
    }else {
        return 'valor falso';
    }
}*/

//Jeito certo

function isTruthy(dado) {
    return !!dado;
}


// Crie uma função matemática que retorne o perímetro de um quadr
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lados){
    return `O perímetro é ${lados * 4}`;
}


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeSobrenome (nome, sobrenome){
      return `${nome} ${sobrenome}`;

}

// Crie uma função que verifica se um número é par
function isEven(numero){
    var modulo = numero % 2;
    if(modulo ===0){
        return true;
    }else {
        return false;
    }


}


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipo (dado){
    console.log( typeof(dado));

}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callb
// utilize essa função para mostrar no console o seu nome complet
// quando o evento 'click' ocorrer.

addEventListener('click', function(){
    console.log ('Arthur Carvalho');
});


// Corrija o erro abaixo

  
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {


    return `Ainda faltam ${totalPaises - paisesVisitados} países`;

    

}function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises}`;


}    

precisoVisitar(20);