window.document.body.onload = function() {
    //Vamos chamar a funcao com a soma de numeros Array

    var numeros = [1, 2, 3, 4, 5, 25, 100, 200, 300, 400];
    soma(numeros);


   // var valores = prompt("Digite Numeros com separados por vírgula");

/*
O comando split aplicado a var 'valores' é capaz de quebra o numeros digitados como string pelo usuario onde há virgula e gerar um 'Array' com esses numeros
*/ 
   


/*

var n = valores.split(",");
   
console.log(n);


    var np = [];


    for (var i = 0; i < n.length; i++) {
         np.push(parseInt(n[i]));

    }
console.log(np);


    maior(np);
    menor(np);
    
*/
    
    const inputName = document.createElement("input");
    inputName.setAttribute("placeholder", "Digite seu nome");
    inputName.onblur = function (){
        inputName.value = mensagem(inputName.value);
        console.log(inputName.value);
        window.document.title = mensagem(inputName.value);
    }

    window.document.body.appendChild(inputName);
    
    // var nome = prompt("Digite seu nome");
    // inputName.value = mensagem1(nome);
    


// var ano = prompt("Digite o Ano");
// inputName.value = Anobi(ano);


//console.log(Math.round(1 + Math.random() * 254));
 
window.document.body.innerHTML=paletaCores(20,20);


}