function Carro(marcaAtribuida, precoAtribuido){
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}

const honda = new Carro('Honda', 3000);
const fiat = new Carro('Fiat', 4000);



function Moto(marca, precoSugerido){
    const taxa = 1.3;
    const precoFinal = precoSugerido * taxa;
    this.marca = marca;
    this.preco = precoFinal;
    console.log(this);
}

const yamaha = new Moto('Yamaha', 23000);