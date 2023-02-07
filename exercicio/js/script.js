
//link do css no javascript

window.document.head.innerHTML=`<link rel="stylesheet" href="css/styles.css">`;


/* Criacao de uma referencia da pag "body" como 'const' para eviter redundancias 'window.document.body' diversas vezes */ 

const body = window.document.body;


/*
A funcao paginaFilmes exibe todos os filmes que estao na colecao listaFilmes . Para cada filme sera criado um elemento html via javascript para exibi-lo
*/

function paginaFilmes () {
    

/*Para cada filme sera criado um grupo de tags html que ira exbibir as informacoes do filmes. Estas tags serao criadas usando o comando creat element podendo adicionar informacoes a elas. Abaixo foi criada tag header e h1 */

    const main = document.createElement('main');
    
    var pos = 0; //auxilia na contagem da estrutura
    
    while (pos < listaFilmes.length){

   
    var header = document.createElement('header');
    var h1 = document.createElement('h1');
    var divFilme = document.createElement('div');
    var imgFilme = document.createElement('img');
    var h2Titulo = document.createElement('h2');
    var pLancamento = document.createElement('p');

    //config das boxes

    divFilme.setAttribute('class','divFilme');
    imgFilme.setAttribute('src',`${listaFilmes[pos].thumbnail}`);
    imgFilme.setAttribute('class', 'imgFilme');

    h2Titulo.innerHTML = listaFilmes[pos].title;

    pLancamento.setAttribute('class', 'pLancamento');
    pLancamento.innerHTML = listaFilmes[pos].description;

    divFilme.appendChild(imgFilme);
    divFilme.appendChild(h2Titulo);
    divFilme.appendChild(pLancamento);
    main.appendChild(divFilme);
    pos++;   
}
        
    h1.innerHTML = 'STORE';

    header.appendChild(h1);
    
    body.appendChild(header);
    body.appendChild(main);
    
}

body.addEventListener("load",paginaFilmes());

