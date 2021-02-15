// Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
// inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] 
// ao vetor pilhae mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. 
// Aofinal das operações imprima os vetores no console.

let inteiros = [1, 2, 3, 4, 5], adiciona = [6, 7, 8, 9, 10]
let tam_adiciona = adiciona.length

for(i = 0; i < tam_adiciona; i++){
    inteiros.push(adiciona[i])
}

console.log(inteiros)