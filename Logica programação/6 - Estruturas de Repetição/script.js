// Estrutura de repetições ou Loop

for (let numero = 0; numero < 3; numero++) {
    console.log(`Repetição de número ${numero}`);    
} 

for (let numero = 0; numero < 20; numero++){
    console.log(numero)
    if(numero == 5){
        break
    }        
}

const objeto = {
    nome: 'Paulo',
    idade: 22,
    cidade: 'Fortaleza'
}

for (key in objeto) {
    console.log(objeto[key]);    
}

const array = ['Hb20', 'Hilux', 'Corola']

for (item of array) {
    console.log(item);    
}

let numero1 = 0;

while (numero1 < 5) {
    console.log(numero1);
    numero1++
    
}