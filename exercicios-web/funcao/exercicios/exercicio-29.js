// Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor 
// estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, 
// escrevendo estas informações.

let vet = [7, 8, 9, 10, 11, 19, 20, 21, 22]

function percorre_vetor(vet){
    let cont_dentro = 0, cont_fora = 0

    for(i = 0; i < vet.length; i++){
        if(vet[i] >= 10 && vet[i] <= 20){
            cont_dentro++
        }else{
            cont_fora++
        }
    }
    console.log(`Números Dentro: ${cont_dentro}, Fora: ${cont_fora}`)
}

percorre_vetor(vet)