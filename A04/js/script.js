/*

Comparacao entra 'var' e 'array' como obter dados de ambas as formas

*/

var nome = "Pedro, Paulo";

console.log(nome);

//Forma de informar apenas um do nomes com uso do 'substring'

console.log(nome.substring(6, 12));

// Criando um 'array'

const nomes = ["Pedro","Paulo"];

console.log(nomes);

// Exibir apenas  o Paulo

console.log(nomes[1]);

//Adicionando mais nome ao Array

//usaremos o comando push

nomes.push("Roberto");

console.log(nomes);

// Exibir o ultimo nome

console.log(nomes[nomes.length - 1]);

// adicionando mais um nome

nomes.push("Vanessa");

console.log(nomes);

console.log("_____________________")

// Add dois objetos de produtos de informatica


P1 = {
   nome:"Mouse",
   marca:"HyperX",
   preco:"150.00" 
};

P2 = {
    nome:"Teclado",
    marca:"Microsoft",
    preco:"250.00"
};

//vamos criar um array de produtos

const Prod = [P1,P2];

console.log(Prod);

// Mostrar apenas um objeto

console.log(Prod[0]);

//Exibir apenas a marca

console.log(Prod[0].marca);

console.log("================================");

//Criar uma array de clientes

const clientes = [
    {
        nome:"Pedro",
        idade:25,
        cidade:"São Paulo"

    },
    {
        nome:"Fernanda",
        idade:31,
        cidade:"Santo André"

    }
];



console.log(clientes);

console.log(clientes[1].nome);

// Adicionando mais clientes


clientes.push({
    nome:"Maria",
    idade:21,
    cidade:"São Paulo"
});

console.log(clientes);

console.log(clientes[2]);


// Exibindo os produtos nas div's do navegador


var pnome = Prod[0].nome;
var ppreco = Prod[0].preco;
var pmarca = Prod[0].marca;

/*

document.getElementById("produtos1").innerHTML = pnome;

document.getElementById("produtos1").innerHTML += pmarca;

document.getElementById("produtos1").innerHTML += ppreco;

*/

// Criar uma K pra exibir os dados dentro de um div

const out = "<h2>"+pnome+"</h2><p class='m'>"+pmarca+"</p><p class='p'>"+ppreco+"</p>";

document.getElementById("produtos1").innerHTML = out;

//Exibir os dados do produto 2


/*

var pnome2 = Prod[1].nome;
var ppreco2 = Prod[1].preco;
var pmarca2 = Prod[1].marca;

*/

//vamos montar os dados de saida usando template strings

const saida2 =`<h2>${Prod[1].nome}</h2
               <p class='m'>${Prod[1].marca}</p>
               <p class='p'>${Prod[1].preco}</p>
 
`;

document.getElementById("produtos2").innerHTML = saida2;
