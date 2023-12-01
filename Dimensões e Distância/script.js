//Height e Width
/*Estas são propriedades e métodos dos objetos Element e
HTMLElement, a maioria delas são Read Only*/

const section = document.querySelector('.first');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

//Mesma  coisa par ao Width, clientWidth...


//getBoundingClientRect()
/*Método que retorna um objeto com valores de width, height
distância do elemento e mais.*/

const rect = section.getBoundingClientRect();

rect.height; //height do elemento
rect.width; // width do elemento
rect.top; //distÇancia entre o topo do elemento e o scroll

//Window

window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}else {
   console.log('Tela maior que 600px');
}

//matchMedia();

/*Utilize um media-query como no CSS para verifica a
largura do browser*/
const small = window.matchMedia ('(max-width: 600px)');

if(small.matches){ //matches é true ou false 
   console.log('Tela menor que 600px');
}else {
   console.log('Tela maior que 600px');
}