// Class cliente, que sempre recebe informações de outro módulo
// Importando Modulos
const moduloA = require('./moduloA.js') // Se o arquivo for ".js" não tem necessidade de colocar a extensão do arquivo
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)