// função que retorna o fatorial de um numero
function fatorial(numero){
 
    for(let i = numero -1; i > 1; i--){
        numero = numero * i
    }
        
    return numero
}
let numero = 6

let resultado = fatorial(numero)
console.log(`O fatorial de ${numero} é ${resultado}`)