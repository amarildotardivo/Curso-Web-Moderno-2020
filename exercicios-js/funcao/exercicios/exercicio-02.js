// l = lado
function triangulo(l1, l2, l3){
    if ( l1 === l2 && l2 === l3) {
        
        return 'Equilátero'

    }else if ( l1 === l2 || l2 === l3 || l3 === l1) {
        
        return 'Isósceles'

    }else if ( l1 !== l2 && l2 !== l3) {
        
        return 'Escaleno'

    }

    return 'Não é um tipo de triângulo existente'
}

let tipo_triangulo = triangulo(2, 3, 1)

console.log(tipo_triangulo)