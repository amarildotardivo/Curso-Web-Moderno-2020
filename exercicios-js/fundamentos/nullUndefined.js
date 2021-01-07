let valor // não inicializada
console.log(valor)

valor = null // null - ausência de valor
console.log(valor)
//console.log(valor.toString()) // vai dar Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined, para limpar variável use null ou 0
console.log(!!produto.preco)
//delete produto.preco // remover um atributo de um objeto
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)