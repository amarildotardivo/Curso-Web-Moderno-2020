// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

let num_int = [2, 3, 8, 13, 21, 25, 88, 76, 55]
let tam_vet = num_int.length

pares = 0
impares = 0

for(i = 0; i < tam_vet; i++){
    if( (num_int[i] % 2) === 0){
        pares++
    }else{
        impares++
    }
}

console.log(`Pares: ${pares}, Ímpares: ${impares}`)