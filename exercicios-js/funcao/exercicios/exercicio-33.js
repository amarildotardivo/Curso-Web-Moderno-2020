// Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. 
// Cada um destes vetores deverá conterquatro valores, sendo o primeiro com valores inteiros, 
// o segundo com strings e o terceiro com valores decimais.Declarados os vetores, 
// utilize a função de união concat() de duas maneiras diferentes para unir os vetores, emostre o resultado no console. 
// Todos os elementos do vetor resultado deverão aparecer no console.

let vetorInteiro = [5, 10, 15], vetorString = ["A", "B", "C"], vetorDouble = [5.25, 10.25, 15.25]
//let tam_int = vetorInteiro.length, tam_String = vetorString.length, tam_Double = vetorDouble.length

let novo_vetor = vetorInteiro.concat(vetorString, vetorDouble)
console.log(novo_vetor)