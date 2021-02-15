var a = 3
let b = 4

var a = 30 // VAR aceita ser redeclarado sem problemas
b = 40     // LET não aceita ser redeclarado - USAR LET PREFERÊNCIALMENTE

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5
//c = 50
console.log(c)

// se não existir valor na variável será declaado undefined
let nome
console.log(nome)