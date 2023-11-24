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