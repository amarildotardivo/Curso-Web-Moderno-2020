// Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso 
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

var palavra1 = "amarildo"
var palavra2 = "amaroldi"

function palavras(palavra1, palavra2){
    // separando
    var vet_palavra1 = palavra1.split("");
    var vet_palavra2 = palavra2.split("");

    // colocando em ordem os caracteres e remontando as strings
    vet_palavra1 = vet_palavra1.sort().join('');
    vet_palavra2 = vet_palavra2.sort().join('');

    // verificando se sao iguais
    console.log( vet_palavra1 == vet_palavra2 );

}

palavras(palavra1, palavra2)