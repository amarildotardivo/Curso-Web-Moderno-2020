const escola = "Cod3r"

console.log(escola.charAt(4)) // Pegar determinado caractere da string usando a posição
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // charCodeAt retorna o valor da tabela ASCII
console.log(escola.indexOf('3'))  // retorna a posição do número na string

console.log(escola.substring(1))    // Ordena a partir de qual posição irá exibir a string
console.log(escola.substring(0, 3)) // A ultima posição não é incluída na exibição

console.log('Escola '.concat(escola).concat("!")) // concatenação de string
console.log('Escola ' + escola + "!") // concatenação de string
console.log(escola.replace(3, 'e'))

// /\d/ - expressão regular que diz para substituir todos os dígitos da string pela letra e
console.log(escola.replace(/\d/, 'e')) 

// /\w/g - expressão regular que diz para substituir toda string pela letra e
console.log(escola.replace(/\w/g, 'e'))

console.log('Ana,Maria,Pedro'.split(',')) // transformar string em array
console.log('Ana,Maria,Pedro'.split(/,/)) // transformar string em array usando rejax