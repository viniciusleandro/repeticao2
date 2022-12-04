let numerosAlunos = 0;
let somaIdades = 0;
let idades = 0
while (idades !== 999) {
    let idades = parseInt(prompt("digite a idade de um aluno \n 999 - irá parar a repetição"))
    if (idades == 999) {
        break
    }
    somaIdades += idades
    numerosAlunos++
}
let mediaAlunos = somaIdades / numerosAlunos;

document.write(`existem ${numerosAlunos} na turma <br>`)
document.write(`a media de idade é ${mediaAlunos}`)