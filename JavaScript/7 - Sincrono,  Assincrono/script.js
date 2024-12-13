
// Sincrono -> processamento que acontece em sequência, ou seja ordenada
// Assincrono -> os processos podem acontecer ao mesmo tempo

// Promises 

const minhaPromise = new Promise((resolve, reject) => {
    let condicao = true;

    if(condicao){
        resolve('Resolvido')
    } else {
        reject(Error('Um erro aconteceu na nossa Premise'))
    }
})

// then e o carch

minhaPromise.then((resultado) => {
    console.log(resultado);
    
}).catch((error) => {
    console.log(error);
    
})

