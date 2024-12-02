// Fetch  // Http
// then e o catch

// Então é com um requisição HTTP que vamos conseguir enviar, receber, deleter, alertar um determinado valor.

// Adicionar um novo usuário
// front end --> fetch --> http --> back end --> banco de dados

// Verbos HTTP

// GET --> Quando o cliente solicita algum dado.
// POST --> Queremos enviar algum dado a partir do cliente.
// DELETE --> Queremos deletar algum dado especifico
// PATCH --> Alterar um dado mais abragente.
// PUT --> Alterar algum

// CRUD 
// Create Read update delete

// Endpoint --> Nada mais é do que uma URL
// O responsável por criar os endpoints, e denominar a responsábilidade de cada      endpoints é o back end

// Um endpoint para criar um usuário
// Um endpoint para deletar um usuário
// um endpoint para alterar dados de um usuário por exemplo

// HTTP --> 4 tipos de parâmentros em um requisição HTTP

// Route Params
// Query Params
// Body Params
// Header Params

// API --> Application Programning Interface -> Back end que a gente está interagindo

fetch('https://api.coingecko.com/api/v3/exchange_rates',
{ 
    mode: 'cors',
    method: 'POST',
    body: {
        nome: 'Ivan',
        idade: 44
    },
    headers:{

    }

}).then((data) => {
    console.log(data)
    
})

// JSON --> JavaScript Object Notation
// JSON --> é um formato de organização de dados
// A diferença do JSON pro Objeto normal do javaScript é que a chave do objeto JSON, deve ser em formato de string
// JSON --> pode ser usado como extensão para arquivos também normalmente de configurações

JSON.parse() // Vai transforma um string em formato de JSON em um objeto JavaScript
JSON.stringify()// Vai tranasformar o objeto JavaScript em formato JSON


