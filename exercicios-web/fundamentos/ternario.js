// ex. de operador ternário: nota >= 7 ? 'Aprovado' : 'Reprovado'
// operador ternário me parece uma condição, 1º tem verificação booleana e a 2ª e 3ª parte é o retorno como em um if

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))