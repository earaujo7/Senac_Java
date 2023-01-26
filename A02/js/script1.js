function corFundo() {

    var cor = document.getElementById("txtCor").value;
    cor = cor.toLowerCase();
    var vcor ="";
     

    if (cor == "red"){
       vcor = "#FF0000";

//        document.body.style.backgroundColor="#FF0000";
    }
else if (cor == "black"){
  vcor="#000000";

  //  document.body.style.backgroundColor="#000000";
}

else if (cor == "green"){
    vcor="#00FF00";
    
    
    //document.body.style.backgroundColor="#00FF00";
}

else{
    
    vcor="#FFFFFF";

    //document.body.style.backgroundColor="#FFFFFF"; 
    alert ("A cor não existe");

}

document.body.style.backgroundColor = vcor;

}

function textoClaro() {

    document.getElementsByTagName("h1")[0].style.color = "Red";
    document.getElementsByTagName("label")[0].style.color = "Red";
    
}

function textoEscuro() {

    document.getElementsByTagName("h1")[0].style.color = "orange";
    document.getElementsByTagName("label")[0].style.color = "orange";
    
}

