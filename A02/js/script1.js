function corFundo() {

    var cor = document.getElementById("txtCor").value;
    cor = cor.toLowerCase();

    if (cor == "red"){
        document.body.style.backgroundColor="#FF0000";
    }
else if (cor == "black"){
    document.body.style.backgroundColor="#000000";
}

else if (cor == "green"){
    document.body.style.backgroundColor="#00FF00";
}

else{
    document.body.style.backgroundColor="#FFFFFF"; 
    alert ("A cor não existe");

}
}


function textoClaro() {

    document.getElementsByTagName("h1")[0].style.color = "Red";
    document.getElementsByTagName("label")[0].style.color = "Red";
    
}

function textoEscuro() {

    document.getElementsByTagName("h1")[0].style.color = "orange";
    document.getElementsByTagName("label")[0].style.color = "orange";
    
}

