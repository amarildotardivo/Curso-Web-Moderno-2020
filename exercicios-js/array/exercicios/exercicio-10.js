/*
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.

Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
 */

 function simboloMais(p){
    let vetSimbolo = [] 
    for(let i = 0; i < p; i++){
         vetSimbolo[i] = "+"
     }
     return vetSimbolo.join(' ')
 }

 console.log(simboloMais(2))
 console.log(simboloMais(4))