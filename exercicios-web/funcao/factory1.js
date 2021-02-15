// Factory simples
function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

// a função factory cria um novo objeto sempre que é chamado, muito parecido com classe