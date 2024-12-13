
const estoque = ['arroz', 'feijão', 'arroz', 'macarrão', 'batata', ''];
const precos = [3.50, 5, 3.50, 2, 2.50, 0]

estoque.forEach((valor, index, Array) =>{
    console.log(valor , index, Array);
    
})

const retornoMap = estoque.map((valor, index, Array) => {
    return `${valor} ${index}`
})

const total = precos.reduce((acc, valor, index, Array) => {
    return acc + valor
}, 0)

const resultado = estoque.find((valor, index, Array) => {
    return valor;
})

const resultados = estoque.findIndex((valor, index, Array) => {
    return valor;
})

const resul = estoque.some((valor, index, Array) => {
    return valor;
})

const resultado1 = estoque.every((valor, index, Array) => {
    return valor;
})

const resultado2 = estoque.filter((valor, index, Array) => valor === 'arroz');