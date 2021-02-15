// Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado considerando que todos 
// pagam R$ 100 mais um adicional conforme a seguinte tabela: 
// 1) crianças com menos de 10 anos pagam R$80; 
// 2) conveniados com idade entre 10 e 30 anos pagam R$50; 
// 3) conveniados comidade acima de  30 e até 60 anos pagam R$ 95; 
// 4) conveniados acima de 60 anos pagam R$130

const idade = 50, valor_padrao_convenio = 100

function selecionar_convenio(idade){
    if(idade < 10){
        plano = valor_padrao_convenio + 80
    }else if(idade >= 10 && idade < 30){
        plano = valor_padrao_convenio + 50
    }else if(idade >= 30 && idade < 60){
        plano = valor_padrao_convenio + 95
    }else if(idade >= 60){
        plano = valor_padrao_convenio + 130
    }

    return plano
}

console.log(selecionar_convenio(idade))