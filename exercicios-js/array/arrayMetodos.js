const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro! - Retira da última posição
console.log(pilotos)

pilotos.push('Verstappen') // inclui na última posição
console.log(pilotos)

pilotos.shift() // remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona na primeira posição
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar, parametros: (posição, quantos serão removidos, inclusão apartir da posição setada)
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)// novo array com as posições [1, 2, 3] o 4 não entra
console.log(algunsPilotos2)