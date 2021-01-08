function teste1(num) {
    // tem a mesma 'reação' que a linguagem C, somente a primeira sentença dps do IF será considerada o bloco do iff
    if (num > 7)
        console.log(num)

    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    // sentença vazia no if, não use ponto e virgula nas estruturas de controle
    if (num > 7)
        ; 
    
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)