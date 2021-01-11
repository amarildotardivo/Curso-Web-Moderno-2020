function dinheiro(valor1, valor2){
    this.soma = valor1 + valor2
    this.soma_corrigida = soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})

    return soma_corrigida
}

console.log(dinheiro(0.1, 0.2))