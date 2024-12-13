const numero = 10
const string = '20.9'
const numeroQuebrado = 18.8

// retorna um número apartir de um string
Number.parseFloat(string) // 20

// retorna um número a partir de uma string, podemos definir a casa decimal
Number.parseInt(string, 10) // 20

// arredonda um número com base nas casas decimais
numeroQuebrado.toFixed() // 11

// retorna uma string a partir de um número
numero.toString() // '10'

// Marth --> objetivo do JavaScript que possui métodos e propriedades e espreções matematicas

// retorna o valor absoluto
Math.abs(-5) // 5

// arredonda o valor para cima
Math.ceil(4.3) // 5

// arredonda o valor para baixo
Math.floor(4.3) // 4

// arredonda para o número mais próximo
Math.round(4.9) // 5

// retorna um número aleatorio entre 0 e 1
console.log((Math.random() * 200).toFixed());

// retorna o maior número dentre os listados
Math.max(2, 3, 7, 12) // 12

// retorna o menor número dentre os listados
Math.min(2, 3, 7, 12) //2


const hoje = new Date();

hoje.getDate() // que dia é hoje

hoje.getMonth() // qual mês

hoje.getFullYear() // qual ano

hoje.getHours() // a hora

hoje.getMinutes()  // os minutos

hoje.getDay() // dia da semana em inglês


