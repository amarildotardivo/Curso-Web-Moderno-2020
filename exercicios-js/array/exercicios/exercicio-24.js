/*
Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. 
A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas.

Exemplos:
contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1
*/

function acharCaractere(caractere, frase){
    if(frase.match(caractere)){
        console.log(caractere)
    }else{
        console.log(`Caracter ${caractere}, não encontrado na frase!`)
    }
}

function contarCaractere(caractere, frase){
    let count = 0
    for(let i = 0; i < frase.length; i++){
        if (frase.charAt(i) == caractere){
            count++
        }
    }
    console.log(count)
}

acharCaractere("R", "A sorte favorece os audazes") // retornará "Caracter R, não encontrado na frase!"
acharCaractere("c", "Conhece-te a ti mesmo") // retornará "c"

contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1