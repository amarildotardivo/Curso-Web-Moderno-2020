/**
A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos
bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100,
exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele
é bissexto ou não.

Exemplos:
Exercícios - Curso Fundamentos de Programação 4

checarAnoBissexto(2020) // retornará true
checarAnoBissexto(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400
*/

function checarAnoBissexto(ano){
    if( ano % 100 === 0 ){ // verifica se o ano termina com 00, exemplo: 1500, 1600, 1700
        result = ano % 400 === 0 // retorna se o ano terminado em 00 é bisexto ou não
    }else {
        return ano % 4 === 0 // retorna se um ano que não é terminado em 00 é bisexto ou não
    }
    return result
}

console.log(checarAnoBissexto(2020)) // retornará true
console.log(checarAnoBissexto(2100)) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400