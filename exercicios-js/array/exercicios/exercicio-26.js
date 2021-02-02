/*
Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.

Exemplos:
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"
*/

function removerVogais(palavra){
    let letras = palavra.split('')
    let vogais = ['a', 'e', 'i', 'o', 'u']
    let consoantes = []

    for(let i = 0; i < letras.length; i++){

        if(vogais.indexOf(letras[i].toLowerCase()) == -1){
            consoantes.push(letras[i])
        }
    }
    return console.log(consoantes.join(''))
}

removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"