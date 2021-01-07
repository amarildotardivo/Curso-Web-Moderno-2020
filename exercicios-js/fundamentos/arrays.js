// em js o array é de tamanho flexível e heterogêneo

const valores = [7.7, 8.0, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)

/*
valores[10] = 25
console.log(valores)
*/
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// função pop mostra o último valor do array
console.log(valores.pop())

delete valores[0]
console.log(valores)

console.log(typeof valores)