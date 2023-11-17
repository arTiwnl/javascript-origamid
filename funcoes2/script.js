function imc(peso, altura) {
    const imc2 = (peso / altura ** 2);
    console.log(imc2);
}

imc (74, 1.75); //retorna imc

//console.log(imc(74, 1.80)); //retorna o valor e undefined





//////////////////////////////
//  Função terceira idade   //
//////////////////////////////

function terceiraIdade(idade){

    if(typeof idade !== 'number'){
        return 'Informe a sua idade!';
    }else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
} //não é uma boa pratica retornar tipos de dados diferentes na mesma função (string e boolean por exemplo)

console.log(terceiraIdade(75));



////////////////////////////////
//  Função Treino de Escopo   //
////////////////////////////////

function faltaVisitar (paisesVisitados) {
    var totalPaises = 193;
    return `Faltam visitar ${totalPaises - paisesVisitados} paises`;
}
