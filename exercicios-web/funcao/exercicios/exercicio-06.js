//Não leve em conta as expressões de cálculo de juros, podem estar incorretas
function juros (capital, taxa, tempo_aplicacao){
    juros_simples = capital * taxa * tempo_aplicacao
    juros_composto = capital * Math.pow((1 + taxa), tempo_aplicacao)

    return console.log(`Juros Simples: ${juros_simples.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} - Juros Composto: ${juros_composto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
}

juros(16000, 0.04, 4)