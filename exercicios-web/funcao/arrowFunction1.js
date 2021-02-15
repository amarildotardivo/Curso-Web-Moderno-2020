let dobro = function(a){
    return 2 * a
}

// a função arrow sempre é anônima, para chama-la deve-se atribuir a uma variável
dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // retorno implicito
console.log(dobro(Math.PI))

let ola = function (){
    return 'Olá'
}

ola = () => 'Olá' // forma padrão com função arrow sem parâmetro
ola = _ => 'Olá' // possui um parâmetro
console.log(ola())