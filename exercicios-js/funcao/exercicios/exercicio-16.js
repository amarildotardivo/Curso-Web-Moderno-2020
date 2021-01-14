let operacao = '/'
let a = 2
let b = 3

function calculadora (a, b, operacao){

    switch(operacao){
    
    case '+': console.log(a + b)
    
    break
    
    case '-': console.log(a - b) 
    
    break
    
    case '*': console.log(a * b)
    
    break
    
    case '/': console.log(a / b)
    break
    
    default: console.log('error')
    
    }
}

calculadora(a, b, operacao)
