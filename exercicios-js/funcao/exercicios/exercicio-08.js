let anotacao = {'10 20 20 8 25 3 0 30 1'}

function anota_pontuacao(anotacao){
    tamanho = anotacao.length - 1
    for( let i =1; i <= tamanho; i++){
        if(anotacao[i] > anotacao[i-1]){
            recordes[0] += 1
        }else if (anotacao[i] < anotacao[i-1]){
            recordes[1] = anotacao[i]
        }
    }
    return recordes
}

console.log(anota_pontuacao(anotacao))

