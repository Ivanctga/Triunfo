// && --> and 
// || --> or
//  ! --> not

const idade = 29
const tipo = 'admin'

if (idade > 29 && tipo == 'admin') {
    console.log('Ele tem mais de 29 anos e é um admin');    
}

if (idade > 29 || tipo == 'admin') {
    console.log('Ele tem mais de 29 anos e é um admin');    
}

if (!(idade > 29) && tipo == 'admin') {
   
    console.log('Ele tem mais de 29 anos e é um admin');    
}

if (idade > 28) {
    console.log('Ele tem mais de 28 anos e é um admin');    
}else if (idade > 25) {
    console.log('Ele tem mais de 25 anos e é um admin');    
}else {
    console.log('Ele não tem idade admin');       
}



switch (idade) {
    case 20:
        console.log('Ele tem 20 anos');        
        break;
    case 21:
        console.log('Ele tem 21 anos');
        break;

    default:
        console.log('Ele não tem nenhuma das idades anteriores');        
        break;
}



