// Função que não retorna

function soma (arrayNumbers) {

    var rs = 0;
    for (var i = 0; i < arrayNumbers.length ; i++) {
        rs += arrayNumbers[i]; 
// Lembrando que o '+=' acumula o valor de cada elemento

}

console.log(rs);

}


function maior (arrayNumbers) {

    var m = arrayNumbers[0];
        for (var i = 1; i < arrayNumbers.length ; i++) {
            if (arrayNumbers[i] > m){m = arrayNumbers[i];
            }


    }

console.log(m);

}


function menor (arrayNumbers) {

    var m = arrayNumbers[0];
        for (var i = 1; i < arrayNumbers.length ; i++) {
            if (arrayNumbers[i] < m){m = arrayNumbers[i];
            }


    }

console.log(m);

}

//Funcoes com retorno

function mensagem (nome){
    return `Olá Mr. ${nome}`;
}

//Funcoes anonimas

const mensagem1 = function (nome){
return `Olá Sr(a). ${nome}`;

}

const Anobi = function (ano){
    if (ano % 4 == 0) {
        return "Ano Bissexto"
    }

    else {
        return "Ano Não Bissexto"
        
    }
} 


const paletaCores = function (linhas, colunas) {

    var tabela = "<table>";


    for(var lin=0; lin < linhas; lin++){
        tabela += "<tr>";
        
    for (var col =0; col < colunas; col++)
    
    {
        var red= (Math.round(1 + Math.random() * 254));
        var green=(Math.round(1 + Math.random() * 254));
        var blue=(Math.round(1 + Math.random() * 254));

        tabela += `<td onclick = mudarCor('rgb(${red},${green},${blue})') style='background-color:rgb(${red},${green},${blue})'>__</td>`;
}

}
return tabela += "</tr>";


}

    function mudarCor (cor) {
    window.document.body.style.backgroundColor = cor;
    
}

