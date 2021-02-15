/*
Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.

Exemplos:
segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6
*/

function segundoMaior(arrNumber){
    let max = arrNumber.reduce(function(a, b) { // Encontra o maior numero do array
        return Math.max(a, b)
      })

      let indiceE = arrNumber.indexOf(max) // Pega o indice do maior número do array

      arrNumber.splice(indiceE, 1) // Exclui o maior numero do array

      let segundoMax = arrNumber.reduce(function(a, b) { // Encontra o maior numero do array novamente
        return Math.max(a, b)
      })
      return console.log("Segundo Maior: " + segundoMax)
}

segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6