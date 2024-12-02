
const dados = {
    nome: 'Ivan',
    idade: 44
}

const profissao = {
    nome: 'Programador',
    stack: 'JavaScript'
}

const endereco = {
    cidade: 'Ipatinga',
    estado: 'MG',
    ...dados,
    ...profissao
}

console.log(Object.keys(dados));

console.log(Object.values(dados));

