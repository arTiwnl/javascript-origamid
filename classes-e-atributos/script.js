//classList

/* Retorna uma lista com todas as classes do elemento. Permite
adicionar remover e verificar se contém.*/

const sessao = document.querySelector('.sessão');

sessao.className; //string
sessao.classList; //lista de classes
sessao.classList.add('ativo');
sessao.classList.add('ativo', 'mobile'); //adicionar duas classes
sessao.classList.remove('ativo'); //remover classe
sessao.classList.toggle('ativo'); //adiciona/remove a classe
sessao.classList.contains('ativo'); //true ou false
sessao.classList.replace('ativo', 'inativo');



//getAttribute e setAttribute

/*Métodos que retornam ou definem de acordo com o atributo selecionado*/

const img = document.querySelector('img');

img.getAttribute('src'); //valor do src
img.setAttribute('alt', 'Texto Alternativo'); //muda o alt
img.hasAttribute('id'); //true / false
img.removeAttribute('alt'); //remove o alt

img.hasAttributes(); //true / false se tem algum atributo

//é muito comum métodos de get e set

//Read Only vs Writable

/* Existem propriedades que não permitem a mudança de seus valores,
essas são considerados Read Only ou apenas leitura.*/

sessao.className; // string com o nome das classes
sessao.className = 'azul'; //substitui completament a string
sessao.className += 'vermelho'; //adiciona azul à string

sessao.attributes = 'class="ativo"'; // Não funciona, read-only