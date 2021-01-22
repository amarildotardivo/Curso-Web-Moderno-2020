// Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma 
// de modo que de 0,0 a 4,9 seja atribuído o conceito D, 
// de 5,0 a 6,9 seja atribuído o conceito C, 
// de 7,0 a 8,9 oconceito B 
// e de 9,0 a 10,0 o conceito A.

let notas = [3.9, 6.0, 8.0, 9.5, 11.0]

function conceito(notas){
    for(i = 0; i < notas.length; i++){
        if(notas[i] >= 0.0 && notas[i] <= 4.9){
            console.log(`${i + 1}ª Nota: ${notas[i].toFixed(1)} - conceito D`)

        }else if(notas[i] >= 5.0 && notas[i] <= 6.9){
            console.log(`${i + 1}ª Nota: ${notas[i].toFixed(1)} - conceito C`)

        }else if(notas[i] >= 7.0 && notas[i] <= 8.9){
            console.log(`${i + 1}ª Nota: ${notas[i].toFixed(1)} - conceito B`)

        }else if(notas[i] >= 9.0 && notas[i] <= 10.0){
            console.log(`${i + 1}ª Nota: ${notas[i].toFixed(1)} - conceito A`)
        }else{
            console.log(`${i + 1}ª Nota: Inválida! Está nota é menor que 0.0 ou maior que 10.0`)
        }

    }
}

conceito(notas)