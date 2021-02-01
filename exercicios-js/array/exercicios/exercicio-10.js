/*
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.

Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
 */

 function simboloMais(quantidade){
    let vetSimbolo = [] 
    for(let i = 0; i < quantidade; i++){
         vetSimbolo[i] = "+"
     }
     return vetSimbolo.join('')
 }

 function simboloMais2(quantidade){
     return Array(quantidade).fill("+").join('')
 }

 function simboloMais3(quantidade) {
    return "+".repeat(quantidade)
    }
    

 console.log(simboloMais(2))
 console.log(simboloMais(4))

 console.log(simboloMais2(2))
 console.log(simboloMais2(4))

 console.log(simboloMais3(2))
 console.log(simboloMais3(4))