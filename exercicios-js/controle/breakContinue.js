const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums){
    if(x == 5){
        break // desvia fluxo para fora do laço corrente
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log('---------------')

for(y in nums){
    if(y == 5){
        continue // interrompe a repetição corrente e vai para a próxima repetição
    }
    console.log(`${y} = ${nums[y]}`)
}

console.log('---------------')

// EVITAR USAR RÓTULOS
externo: for(a in nums){
    for(b in nums){
        if (a ==2 && b == 3){
            break externo // rótulo para poder realizar o break na estrutura de repetição desejada
        }
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('Fim')