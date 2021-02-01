/**
Criar uma função que receba um array de números e retorne o menor número desse array.

Exemplos:
menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15
*/

function menorNumero(array){
    let min = array.reduce((min, elemento) => Math.min(min, elemento))
    
    console.log(min)
}

menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15