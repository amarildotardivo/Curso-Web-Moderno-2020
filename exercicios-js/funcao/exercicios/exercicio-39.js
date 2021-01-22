// Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que 
// o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. 
// Faça a troca sem utilizar uma variável auxiliar.

let vetorA = [1, 2, 3, 4], vetorB = [5, 6, 7, 8]
console.log('Antes da troca:')
console.log(`Vetor A: ${vetorA}, Vetor B: ${vetorB}`)

function troca(vetorA, vetorB){
    if(vetorA.length == vetorB.length){
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    }else{
        return 'Vetores de tamanhos diferentes.'
    }
    console.log('Depois da troca:')
    console.log(`Vetor A: ${vetorA}, Vetor B: ${vetorB}`)
}

troca(vetorA, vetorB)