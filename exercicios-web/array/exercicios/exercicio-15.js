/**
Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.

💡 Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão dele por 2 é zero.

Exemplos:
receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]
*/

function receberSomenteOsParesDeIndicesPares(array){
    let novoArray = []
    for(let i = 0; i < array.length; i++){
        if(array.indexOf(array[i]) % 2 == 0 && array[i] % 2 == 0){
            novoArray.push(array[i]) 
        }
    }

    return novoArray
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4])) // retornará []
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])) // retornará [10, 22])