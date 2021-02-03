/*
Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.

Exemplos:
segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6
*/

function segundoMaior(arrNumber){
    let max = arrNumber.reduce(function(a, b) {
        return Math.max(a, b)
      })
    
    for(let i = 0; i < arrNumber.lentgh; i++){
        if(arrNumber[i] === max){
            console.log("Deletado: " + arrNumber[i])
            delete arrNumber[i]
        }
    }
}

segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6