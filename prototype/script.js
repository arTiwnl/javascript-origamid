//PROTOTYPE

/* A propriedade prototype é um objeto
adicionado a uma função quando ela é criada.*/

function pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

pessoa.prototype.andar = function() {
    return this.nome + ' andou';
}


pessoa.prototype.nadar = function() {
    return this.nome + ' nadou';
}


const andre = new pessoa('André', 28);

console.log(pessoa.prototype); //retorna o objeto
console.log(andre.prototype); //undefined