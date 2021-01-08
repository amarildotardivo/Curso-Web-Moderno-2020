function getinteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1
// do while é usado geralmente se vc precisar estritamente que pelo menos 1 vez o bloco de código seja executada
 do {
    
    opcao = getinteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)

} while(opcao != -1)

console.log('Até a próxima')