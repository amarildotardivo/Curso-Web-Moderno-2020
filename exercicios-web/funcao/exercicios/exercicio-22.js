// Criar uma função para calcular o valor a ser pago de anuidade de uma associação. 
// A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. 
// Aanuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juroscompostos). 
// O retorno deve ser o valor a ser pago para o respectivo mês escolhido.


// juros_composto = capital * Math.pow((1 + taxa), tempo_aplicacao)

const mes = 2
var valor = 100

function calcular_anuidade(mes, valor){
    if(mes > 0 && mes <= 12){
        for(i = 2; i <= mes; i++){
            valor = (valor + (valor * 5) / 100)
        }
        return console.log(`R$ ${valor.toFixed(2)}`)
    }
    return console.log("Mês Inválido!")
}

calcular_anuidade(mes, valor)