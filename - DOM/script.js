const titulo = document.querySelector('h1');

console.log(titulo.innerText); // retorna o texto;
console.log(titulo.classList); // retorna as classes;
console.log(titulo.id); // retorna o id;
console.log(titulo.offsetHeight); // retorna altura do elemento;

titulo.addEventListener('click', callback); //Método
//ativa a função callback ao clicar o título