
const pessoa = {
    nome: 'Ivan',
    idade: 44,
    endereco: {
        cidade: 'Ipatinga',
        estado: 'MG'
    }
}

const {nome, idade} = pessoa;

console.log(nome, idade);

const {cidade, estado} = pessoa.endereco;

console.log(cidade, estado);


const carros = ['HB20', 'Hilux', 'Corola'];

const[, segundoCarro] = carros;

console.log(segundoCarro);



