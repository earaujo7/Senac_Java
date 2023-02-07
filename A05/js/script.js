/*

A funcao 'carregardados' é utilizada para load and exibir os dados relacionados a idade, cidade e produtos em controles 'select's' do html, e para isso estamos usando estruturas de repetição fazendo contagem de 18 a 90 anos, para idades, equanto para cidade e produtos estamos usando o 'loop' 'for' para ler as cidades e produtos.

*/

function carregardados() {

    /*
Foram criados K 'cons' como referencia aos controles 'select's' do html. Evitando a repetição de comandos
    */

    const nome = document.getElementById("nome");
    const idade = document.getElementById("idade");
    const cidade = document.getElementById("cidade");
    const prod = document.getElementById("prod");


// foi adicionado um option ao 'select' da idade

    idade.innerHTML = `<option>Selecione Idade</option>`;
    for(let i = 18; i <= 90; i++)
     {
        idade.innerHTML += `<option>${i}</option>`;
    }

 /* Para preencher a idade de 18 a 90 anos com a estrutura de repetição fazendo contagem de 18 a 90 dentro do 'select'
 */  
   
   
 // adionado um 'option' ao 'select' de cidade

        cidade.innerHTML = `<option>Selecione uma Unidade</option>`;

/*
Essa estrutura de repetição foi criada para ler todo os conteudos do 'Array' cidades e obter uma cidade por vez e assim criar um controle option para cada cidade e adicionado ao 'select' 
*/

        for(let i = 0; i <= 3; i++)

    {
         cidade.innerHTML += `<option>${city[i]}</option>`;

    }

    
    
    
    prod.innerHTML = `<option>Selecione um Produto</option>`;
/*
Nessa estrutura de repeticao estamos obtendo os os produtos do 'Array'. Exibindo os nomes do produtos por meio do controle option. Neste caso o nome do produtos é uma propriedade do 'Array' e por isso foi necessario adicionar um ponto depois dos colchetes para acessar esta propriedade. Tambem foi adicionado ao controle option o produto 'value' que determina o valor do produto da opçao que foi selecionada e no 'value' foi atribuido o id do produto.

*/
    for(let i = 0; i <= 2; i++)
    {
        prod.innerHTML += `<option value=${products[i].idproduct}>${products[i].nomeproduct}</option>`;

    }
    
} 

/*
Esta funcao é utilizada para encontrar um determinado produto no 'Array' ao ser selecionado pelo usuário. Ao selecionar o produto, o id do produto é passado via paramento para esta funcao e entao utilizado um estrutura de repeticao para localizar o produto dentro do 'Array' e joga-lo na div.
*/

function exibirProd(id)
{

    const rsprod = document.getElementById("rsprod");

/*
O 'for' procura o id passado para a funcao no 'Array' comparando o id passado com o id de produtos, ao comparar os id's a estrutura de repeticao quebra por isso uso do 'break' e os dados do produto sao exibidos na div.

*/

    for(let i = 0; i <= 2; i++){
        if (products[i].idproduct == id){
            rsprod.innerHTML =(products[i].nomeproduct);
            rsprod.innerHTML+=(products[i].marca);
            rsprod.innerHTML+=(products[i].preco);
            
 
        break; // Stop the 'For' loop

        
    }

    
}

}