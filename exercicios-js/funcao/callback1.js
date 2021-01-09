const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
// forEach vai executar a função passada por parâmetro sempre que ela for chamada
fabricantes.forEach(imprimir)
fabricantes.forEach( fabricante =>  console.log(fabricante) )