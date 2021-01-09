let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global) // Cuidado, a palavra reservada this mesmo dentro da função é global

const obj = {}
comparaComThis = comparaComThis.bind(obj) // usando a função bind o this deixa de ser global e fixa no contexto do obj
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) // o this na função arrow sempre será fixo no contexto da função
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)