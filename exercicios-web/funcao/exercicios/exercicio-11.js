//função que retorna se o ano é bisexto ou não
function ano_bisexto(ano){
    if( ano % 100 === 0 ){ // verifica se o ano termina com 00, exemplo: 1500, 1600, 1700
        result = ano % 400 === 0 // retorn se o ano terminado em 00 é bisexto ou não
    }else {
        return ano % 4 === 0 // retorna se um ano que não é terminado em 00 é bisexto ou não
    }
    return result
}

var resultado = ano_bisexto(1600)
console.log(resultado)

