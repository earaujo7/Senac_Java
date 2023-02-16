/*

function media (arrayNumbers){
    let rs = 0;

    for(var i = 0; i < arrayNumbers.length; i++){
    rs+=arrayNumbers[i];

}

return rs / arrayNumbers.length;

}

const media2 = function (arrayNumbers){
    let rs = 0;

    for(var i = 0; i < arrayNumbers.length; i++){
        rs+=arrayNumbers[i];
        
}

return rs / arrayNumbers.length;

}

const media3 = (arrayNumbers) => {
    let rs = 0;

    for (var i = 0; i < arrayNumbers.length; i++){
        rs+=arrayNumbers[i];
        
}

return rs / arrayNumbers.length;

}

// ----

function exibir(cli, p){

    console.log(cli.name);
    console.log(cli.itens);

}

// ----



function getUsers (){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{

        resolve
        ([
            {user:"John", email:"john@example.com"},
            {user:"Anne", email:"Anne@example.com"}

        ])

                 },5000)

    })
}

function mostrar (user){
    console.clear();
    console.log(user);

}

const rs = getUsers();
rs.then(mostrar);

*/



function listarFilmes(){
    return new Promise((resolve, reject) => {
        resolve(listaFilmes);
        reject("Erro ao buscar filmes");
        
    });

}

listarFilmes().then((x)=>{
    console.log(x);
}).catch((e)=>{
    console.error(e);
});

