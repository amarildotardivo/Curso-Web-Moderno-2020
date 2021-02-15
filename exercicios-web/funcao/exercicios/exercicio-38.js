// Escreva uma função que receba dois parâmetros início e fim. 
// Essa função deve imprimir todos os números ímpares que estão entre esses valores. 
// Por padrão os valores devem ser 0 para início e 100 para fim. 
//Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

let inicio = 150, fim = 100

function imprimir_impares(inicio, fim){
    // inverte os valores de inicio e fim se o inicio for maior que o fim
    if(inicio > fim){
        let aux = inicio
        inicio = fim
        fim = aux
    }
    
    for(i = inicio; i <= fim; i++){
        if(i % 2 != 0){ // imprimi somente os números ímpares
            console.log(i)
        }
    }
}

imprimir_impares(inicio, fim)