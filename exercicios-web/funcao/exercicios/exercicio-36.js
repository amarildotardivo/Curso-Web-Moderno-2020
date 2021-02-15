// Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. 
// Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo número passado como parâmetro. 
// A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.

let vetor = [2, 4, 8], numero = 5
let tam_vetor = vetor.length
let vetor_result = []
let vetor_result2 = []

function mult1(vetor, numero){
    for(i = 0; i < tam_vetor; i++){
        vetor_result[i] = vetor[i] * numero 
    }
    console.log(vetor_result)
}

function mult2(vetor, numero){
    for(i = 0; i < tam_vetor; i++){
        if(vetor[i] > 5){
            vetor_result2[i] = vetor[i] * numero 
        }
    }
    console.log(vetor_result2)
}

mult1(vetor, numero)
mult2(vetor, numero)