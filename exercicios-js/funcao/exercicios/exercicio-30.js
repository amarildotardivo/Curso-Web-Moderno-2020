// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

let num_int = [1, 3, 8, 105, 21, 25, 88, 0, 96]
let tam_vet = num_int.length

maior = 0
menor = num_int[0]

for(i = 0; i < tam_vet; i++){

    if(maior < num_int[i]){
    
        maior = num_int[i]
    
    }else if(menor > num_int[i]){
    
        menor = num_int[i]
    
    }
}

console.log(`Maior: ${maior}, Menor: ${menor}`)