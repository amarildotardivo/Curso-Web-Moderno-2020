const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then( response => {
    const funcionarios = response.data

// ---------------- MINHA SOLUÇÃO --------------------------------    
    console.log("------MINHA SOLUÇÃO-------")
    
    // Gera um novo array somente com Mulheres Chinesas
    const paisGenero = funcionarios.filter( function(f) {
        if(f.pais == 'China' && f.genero == 'F'){
            return funcionarios
        }
    })

    // Função que recebe o endereço das propriedades salario do objeto
    const salarios = f => f.salario
    
    // Função que retorna o menor valor
    const menorSalario = (acumulador, atual) => Math.min(acumulador, atual)

    // constante que recebe o menor salario dentre o array de mulheres chinesas
    const salarioMes = paisGenero.map(salarios).reduce(menorSalario)
    
    // função que retorna através de um filtro qual o objeto da mulher chinesa que ganha menos
    const mulherChinesaGanhaMenos = paisGenero.filter( (f) => f.salario == salarioMes)
    console.log(mulherChinesaGanhaMenos)

// ---------------- SOLUÇÃO DO PROFESSOR --------------------------------    
    console.log("------SOLUÇÃO DO PROFESSOR-------")

    const chineses = f => f.pais ==='China'
    const mulheres = f => f.genero === 'F'
    const menorSalario2 = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    } 

    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario2)
    
    console.log(func)

})