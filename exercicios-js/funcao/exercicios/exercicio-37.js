// Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam como parâmetros 
// um número n (número do termo), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos ,bem como a soma dos elementos.

let n = 4, a1 = 2, r = 2

function PA (n, a1, r){
    let termosPA = [a1]
    for(i = 1; i < n; i++){
        
        termosPA[i] = termosPA[i - 1] + r // Calculando até o termo "n" da PA em um array
        an = a1 + (n - 1) * r             // an = último termo / um termo geral de uma PA
        somaPA = (n * (a1 + an)) / 2      // soma de todos os termos da PA
    }
    console.log(`PA: [${termosPA}] Soma dos termos: ${somaPA}`)
}

function PG(n, a1, r){
    let termosPG = [a1]
    for(i = 1; i < n; i++){
        termosPG[i] = termosPG[i - 1] * r               // Calculando até o termo "n" da PG em um array
        an = a1 * (Math.pow(r, n - 1))                  // an = último termo / um termo geral de uma PG
        somaPG = (a1 * (Math.pow(r, n) - 1)) / (r - 1)  // soma de todos os termos da PG
    }
    console.log(`PG: [${termosPG}] Soma dos termos: ${somaPG}`)
}

PA(n, a1, r)
PG (n, a1, r)