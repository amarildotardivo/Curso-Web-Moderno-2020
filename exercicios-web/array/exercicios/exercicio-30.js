/*
Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.

Exemplo:
recerberMelhorEstudante({
Joao: [8, 7.6, 8.9, 6], // média 7.625
Mariana: [9, 6.6, 7.9, 8], // média 7.875
Carla: [7, 7, 8, 9] // média 7.75
}) // retornará { nome: "Mariana", media: 7.875 }
*/

// Função que realiza soma de todos elementos de um array simples
const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)

// Função que realiza a média de um array simples, chamando a função soma
const media = array => soma(array) / array.length

function recerberMelhorEstudante(estudantes) {
    const estudantesComMedias = Object.entries(estudantes).map( estudante => {// Pega todas as entradas e passa valores dos indices
    const chave = 0,
    valor = 1
    return { nome: estudante[chave], media: media(estudante[valor]) } // Acessa chave e valor, e em valor chama a função média
    })

    // Ordena o objeto usando de forma decrescente
    const estudantesOrdenados = estudantesComMedias.sort( (estudanteA, estudanteB) => estudanteB.media - estudanteA.media )
    
    // Atribui o primeiro grupo de chave: valor do objeto a um novo objeto
    const melhorEstudante = estudantesOrdenados[0]

    // Retorna o valor deste objeto ao usuário
    return melhorEstudante
}

console.log(recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
    })) // retornará { nome: "Mariana", media: 7.875 }