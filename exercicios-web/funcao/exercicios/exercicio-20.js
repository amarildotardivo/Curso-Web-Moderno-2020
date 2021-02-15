// notas em reais: 1, 5, 10, 50, 100

let saque = 154

function sacar(saque){
    var cem = 0, cinquenta = 0, dez = 0, cinco = 0, um = 0
    
    if(saque < 1)
    {
        return console.log('Valor muito baixo, solicite um saque de 1 real ou mais!')
    }
    
    while(saque >= 100){
        saque = saque - 100
        cem++
    }
    while(saque >= 50){
        saque = saque - 50
        cinquenta++
    }
    while(saque >= 10){
        saque = saque - 10
        dez++
    }
    while(saque >= 5){
        saque = saque - 5
        cinco++
    }
    while(saque >= 1){
        saque = saque - 1
        um++
    }
    
    return console.log(`R$ 100: ${cem}, R$ 50: ${cinquenta}, R$ 10: ${dez}, R$ 5: ${cinco}, R$ 1: ${um}`)
}

sacar(saque)