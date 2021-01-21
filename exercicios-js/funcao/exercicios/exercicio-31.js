// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetore imprime a quantidade no console.

let num_int = [1, 3, 8, -105, 21, -25, -88, 0, -96]
let tam_vet = num_int.length

let num_negativo = 0

for(i = 0; i < tam_vet; i++){
    if(num_int[i] < 0){
        num_negativo++
    }
}

console.log('Números Negativos: ' + num_negativo)