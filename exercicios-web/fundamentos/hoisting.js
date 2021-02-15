// HOISTING - mover a declaração da variável para o topo, porém só ocorre com VAR

console.log('a = ', a)
var a = 2
console.log('a = ', a)

// VAI DAR ERRO - hoisting não funciona com LET
console.log('b = ', b)
let b = 2
console.log('b = ', b)