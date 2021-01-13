let anotacao = "10 20 20 8 25 3 0 30 1"
//console.log(typeof anotacao)

function anota_pontuacao(pontuacao_atual){
    //console.log(a[3])
    let recorde_atual = pontuacao_atual[0]
    let cont_recorde = 0
    let tamanho = pontuacao_atual.length
    let recorde = pontuacao_atual[0]
    console.log(recorde)
    let recordes = []
    let menor = 1
    //console.log(tamanho)

    for( let i =1; i <= tamanho -1; i++){
        //console.log(a[i])
        if(recorde_atual < pontuacao_atual[i]){
            recorde_atual = pontuacao_atual[i]
            console.log(recorde)
            cont_recorde++
            //console.log(recorde)
        }
        if (menor > pontuacao_atual[i-1]){
            menor = pontuacao_atual[i-1]
            recordes[1] = pontuacao_atual[i]
        }
    }

    recordes[0] = cont_recorde
    recordes[1] = menor
    return recordes
}

console.log(anota_pontuacao(anotacao.split(' ')))

