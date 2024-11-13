//Manipulação dos objetos Dom (document Object Model)
//Representação de dados dos objetos que compões uma estrutura e um documento web

//essencial para interagir com elementos de uma página 
//Document.querySelector()

//Exemplo:

const titulo = document.querySelector('h1');
titulo.textContent = 'Texto modificado'; //modifica o texto do elemento 
// Uso principal: busca e modificar elementos 

//============================================================

//Document.createElement()
// Cria novos elementos dinamicos 

//Exemplo:

const novoElemento = document.createElement('p');
novoElemento.textContent = 'Parágrafo Adicionado'
document.body.appendChild(novoElemento);
//uso principal: Adicionar novos elementos ao Dom

//================================================================

//addEventListener()
//Funções que lidam com interações dos uruarios 
//Sua função é adicionar um ouvinte para eventos (como cliques)

const botao = document.querySelector('button');
botao.addEventListener('click', () => {
    alert('Botão clicado!');
}
); 
//Uso principal: Criar interatividade, com cliques ou movimentos do mouse 

//setTimeout()
//controlam ações que ocorrem em intervalos ou após um tempo
//Executa uma função após um periodo de tempo (unidade de medida > milisegundo)

setTimeout(() => {
    alert('Executado após 2 segundos');
}, 2000); 
//alert > ele executa o toString do Objeto e apresenta em tela 
//console.log > registra a informação no console do navegador, ficando restrita ao conhecimento do desenvolvedor 
//Uso principal: atrasar execusões ou criar temporizadores 