let carro = 'hatch'

switch(carro){
    case 'hatch':
        console.log('Compra efetuada com sucesso!')
        break
    case 'sedan':
    case 'motocicletas':
    case 'caminhonetes':
        console.log(`Tem certeza que prefere este modelo: ${carro}`)
        break
    default:
        console.log('Não trabalhamos com este tipo de automóvel aqui')

}