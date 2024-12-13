
interface ocupação {
    trabalho: string,
    local?: string
}

interface pessoa {
    name: string,
    idade: number,
    cidade: string
}

type dados = ocupação & pessoa

const pessoa: dados = {
    name: 'Ivan',
    idade: 44,
    cidade: 'Ipatinga',
    trabalho: 'Programador',
    local: 'Remoto'
}


