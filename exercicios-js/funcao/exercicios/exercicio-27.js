// Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças e 
// calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e emquantos anos isso acontecerá. 
// Utilize centímetros para as unidades de medida.

// Não verifica quando a criança não ultrapassa a outra!

let altura1 = 1.40
let altura2 = 1.38
let taxa_cresc1 = 0.03
let taxa_cresc2 = 0.05

function crescimento(altura1, altura2, taxa_cresc1, taxa_cresc2){
    ano = 0
    if(altura1 != altura2){
        if(altura1 > altura2){
            for(i = 0; altura2 < altura1; i++){
                altura1 = altura1 + taxa_cresc1
                altura2 = altura2 + taxa_cresc2
                ano++
            }
            return console.log(`Criança 2: ${altura2} Criança 1: ${altura1}, passou em ${ano} anos!`)
        }else if(altura1 < altura2){
            for(i = 0; altura1 < altura2; i++){
                altura1 = altura1 + taxa_cresc1
                altura2 = altura2 + taxa_cresc2
                ano++
            }
            return console.log(`Criança 2: ${altura1} Criança 1: ${altura2}, passou em ${ano} anos!`)
        }
    }
    return console.log('Têm o mesmo tamanho!')
}

crescimento(altura1, altura2, taxa_cresc1, taxa_cresc2)