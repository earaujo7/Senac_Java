// Criacao do 'Array' de cidadad

const city = ["Guarulhos", "Campinhas", "Atibaia","São Paulo"];

// Criacao de 'Array' de objetos (produtos)

const products = [
        {
         idproduct: 01,
         nomeproduct: "Mouse",
         marca: "Razer",
         preco: 299.00   
        
        },

        {
            idproduct: 02,
            nomeproduct: "Teclado",
            marca: "HyperX",
            preco: 199.00            
            
        },

        {
            idproduct: 03,
            nomeproduct: "SSD",
            marca: "Kingston",
            preco: 599.00            
            
        },
];


// Criando 'Array' de clientes

const clients = [
        {
            idclient: 15,
            nome: "John",
            idade: "25",
        },

        {
            idclient: 16,
            nome: "Mary",
            idade: "35",
            
        },
];


//criando um 'Array' de vendas

const vendas = [
        {
            idvenda: 0101,
            data: "12/20/2021",
            idclient:15,
            produtos:[
                {
                    idproduct: 01,
                    quantidade: 3

                },
                {
                    idproduct: 02,
                    quantidade: 3
                    
                },
            ]
        },
];