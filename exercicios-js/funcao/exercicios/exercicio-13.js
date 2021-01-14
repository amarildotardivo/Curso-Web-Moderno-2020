let dia = 'sabado'
let dia_semana = 0

if(dia.toLowerCase() === 'domingo'){
    dia_semana = 1
}else if(dia.toLowerCase() === 'segunda'){
    dia_semana = 2
}else if(dia.toLowerCase() === 'terça'){
    dia_semana = 3
}else if(dia.toLowerCase() === 'quarta'){
    dia_semana = 4
}else if(dia.toLowerCase() === 'quinta'){
    dia_semana = 5
}else if(dia.toLowerCase() === 'sexta'){
    dia_semana = 6
}else if(dia.toLowerCase() === 'sabado'){
    dia_semana = 7
}

switch(dia_semana){
    case 1:
    case 7:
        console.log('Fim de Semana')
        break
    case 2: case 3: case 4: case 5: case 6:
        console.log('É um dia útil')
        break
    default:
        console.log('Dia Inválido')
}

