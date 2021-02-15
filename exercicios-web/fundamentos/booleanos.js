let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// para usar number como boolean usamos o principio lógico da negação
isAtivo = 1
console.log('Realizando saída Boolean com Number sendo = ' + isAtivo)
console.log('Saída boolean estado original: ' + !!isAtivo) // saída com 2 negações
console.log('Saída boolean estado negado: ' + !isAtivo)  // saída com 1 negação

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = Infinity))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))
console.log(('' || null || 0 || 'epa' || 123)) // retorna o primeiro valor verdadeiro que encontrar

let nome = '' 

console.log(nome || 'Desconhecido') // se a variavel nome possui valor é apresentado o valor