// classe
class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

// função contrutora 1
function Pessoa2(nome){
    this.nome = nome // posso usar ou não os atributos com this, porém não terei como visualizar se não colocar o this
    this.falar = function(){
        return `Meu nome é ${nome}`
    }
}
const p2 = new Pessoa2('Vitor')
console.log(p2.nome)
console.log(p2.falar())

// função contrutora 2
function soma(a, b){
    this.somar = function (){
        return a + b
    }
}
const s = new soma(2, 3)

console.log(s.somar())