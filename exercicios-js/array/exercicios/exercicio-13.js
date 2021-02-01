/**
 Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.

Exemplos:
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []
 */

function filtrarNumeros(array){
    const novoArray = []
    for(let i = 0; i < array.length; i++){
        if(typeof array[i] === "number"){
            novoArray.push(array[i])
        }
    }
    console.log(novoArray)
}

filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []