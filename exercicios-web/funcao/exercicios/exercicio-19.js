// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente.
id = 300
quantidade = 2

function lanche(id, quantidade){

    switch(id){
        case 100:
        valor = quantidade * 3
        console.log(quantidade + ' Cachorro Quente: R$ ' + valor.toFixed(2))
        break
        
        case 200:
        valor = quantidade * 4
        console.log(quantidade + ' Hambúrguer Simples: R$ ' + valor.toFixed(2))
        break

        case 300:
        valor = quantidade * 5.5
        console.log(quantidade + ' Cheeseburguer: R$ ' + valor.toFixed(2))
        break
        
        case 400:
        valor = quantidade * 7.5
        console.log(quantidade + ' Bauru: R$ ' + valor.toFixed(2))
        break

        case 500:
        valor = quantidade * 3,5
        console.log(quantidade + ' Refrigerante: R$ ' + valor.toFixed(2))
        break

        case 600:
        valor = quantidade * 2.8
        console.log(quantidade + ' Suco: R$ ' + valor.toFixed(2))
        break

        default:
            console.log('Produto Não Existente')
    }
}

lanche(id, quantidade)