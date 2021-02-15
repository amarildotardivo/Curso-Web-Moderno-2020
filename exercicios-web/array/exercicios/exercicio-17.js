/**
Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

Exemplos:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60
*/

function somarNumeros(arrayNumeros){
    let total = arrayNumeros.reduce((total, elemento) => total + elemento, 0)
    console.log(total)
}

somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60