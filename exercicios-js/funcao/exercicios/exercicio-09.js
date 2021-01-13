function sistema_notas(nota){
    if((nota < 0) || nota > 100){
        return console.log('Nota inválida')
    }

    if( nota < 38){
        return console.log(`Nota: ${nota}, Reprovado sem arredondamento`)
    }else if ( nota < 40){
        nota = Math.ceil(nota / 5) * 5
        return console.log(`Nota: ${nota}, Aprovado com arredondamento`)
    }

    if( (nota % 5) === 0  ){
        return console.log(`Nota: ${nota}, Aprovado sem arredondamento`)
    }else if ( (nota % 5) < 3 ){ 
        nota = Math.floor(nota / 5) * 5
        return console.log(`Nota: ${nota}, Aprovado e arredondamento para baixo`)
    }else {
        nota = Math.ceil(nota / 5) * 5
        return console.log(`Nota: ${nota}, Aprovado e arredondamento para cima`)
    }
    

}

sistema_notas(29)