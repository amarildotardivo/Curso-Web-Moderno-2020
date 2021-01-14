let plano_e = 'x'
let salario = 100
function plano_f ( plano_e , salario) {

    switch(plano_e){
        case 'a': console.log((salario*10)/100)
    break 

    case 'b': console.log((salario*15)/100)
    break 

    case 'c': console.log((salario*20)/100)
    break

    default: console.log('plano invalido')
    }
}
plano_f(plano_e, salario)