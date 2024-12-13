// CLASS

class Mamifero {
    constructor(patas){
        this.especie = 'Mamiferos'
    }

    dormir(){
        alert('esse mamifero dormiu')
    }
}


class Pessoa extends Mamifero {
    constructor(nome, idade) {
        super(patas);
        this.nome = nome;
        this.idade = idade;
        this.cidade = 'Ipatinga'
    }

    andou(){
        alert(`${this.nome} andou`)
    }

    dormir(){
        super.dormir();
    }
}

const pessoa1 = new Pessoa('Ivan', 44);


