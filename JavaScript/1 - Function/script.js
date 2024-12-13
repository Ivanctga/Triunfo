// Function

// const factoryFunction = (nome) => {
//     return {
//         logou: () => alert(`O usuário ${nome} logou`),
//         deslogou: () => alert(`o usuário ${nome} deslogou`)
//     }
// }

// factoryFunction('Ivan').logou();

// function Pessoa(nome, idade) {
//     this.nome = nome;
//     this.idade = idade
// }

// const pessoa1 = new Pessoa('Ivan', 44);
// const pessoa2 = new Pessoa('Arthur', 7);

// Prototypes

function Game() {
    this.pulou = () => alert('O personagem pulou');
    this.deitou = () => alert('O personagem deitou');
}

Game.prototype.correu = () => alert('O personagem correu');

const novoJogo = new Game();

console.log(novoJogo);
