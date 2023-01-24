// Arquivo de Script para a funçãO Ola 

function ola(){
 alert('Olá, Mundo!');

}


/*
Dentro da pagina HTML terá um botão com ID chamado btnClick. Ao clicar no botão, a funçao ola() é chamada. Que executa uma mensagem com o alert.
*/

// document.getElementById('btnClick').onclick = ola;



// Declaração de variáveis

var nome;
var numero1,numero2;
var resultado;

nome= "";
numero1 = 0;
numero2 = 0;
resultado = 0;

numero1 = prompt("Digite um número");
numero2 = prompt("Digite outro número");
resultado = numero1 * numero2;

console.log("A multiplição entre o valor %d e %d é %d", numero1, numero2, resultado);