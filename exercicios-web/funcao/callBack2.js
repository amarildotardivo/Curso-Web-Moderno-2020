const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem usar callback
const notasBaixas1 = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// com callback
const notasBaixas2 = notas.filter(function(nota){ //com função tradicional
    return nota < 7
})
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7) // com função arrow
console.log(notasBaixas3)

const notasMenorQue7 = nota => nota < 7 // passando a função arrow para uma constante, somente por organização
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)