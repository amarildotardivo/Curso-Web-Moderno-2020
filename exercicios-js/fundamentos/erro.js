function tratarErrorELancar(erro) {
    //throw new Error('Mensagem de erro para o usuário!')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErrorELancar(e)
    }finally {
        console.log('Final')
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)