// Escreva um algoritmo que leia o código de um aluno e suas três notas. 
// Calcule a média ponderada doaluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. 
// Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 
// e "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

var aluno = new Array(1)
aluno[0] = 001
aluno[1] = "Nome1"
aluno[2] = 4
aluno[3] = 5
aluno[4] = 5

function calcular_media(aluno1){
    let p1 = 4
    let p2 = 3
    let p3 = 3

    media = ( (aluno[2] * p1) + (aluno[3] * p2) + (aluno[4] * p3) ) / (p1 + p2 + p3)

    if(media >= 5){
        return console.log(`Código: ${aluno[0]}, Notas: ${aluno[2]} ${aluno[3]} ${aluno[4]} APROVADO`)
    }else{
        return console.log(`Código: ${aluno[0]}, Notas: ${aluno[2]} ${aluno[3]} ${aluno[4]} REPROVADO`)
    }
}

calcular_media(aluno)