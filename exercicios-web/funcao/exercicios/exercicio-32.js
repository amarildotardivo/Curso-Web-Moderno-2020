// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

let num_int = [1, 3, 8, 105]
let tam_vet = num_int.length

let soma = 0

for(i = 0; i < tam_vet; i++){
    soma = soma + num_int[i]
}

media = soma / (tam_vet)
console.log(`Média Aritimética é: ${media}`)