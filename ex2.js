let totalHomens = 0
let totalMulheres = 0
let continuar = "s"

while (continuar == "s") {
    let sexo = prompt("digite o sexo \n f - feminino \n m - masculino")
    if (sexo == "f") {
        let salario = parseFloat(prompt("digite o salario pago:"))
        totalMulheres += salario
    }else if(sexo == "m"){
        salario = parseFloat(prompt("digite o salario pago:"))
        totalHomens += salario
    }else{
        alert("opção inválida")
    }
    continuar = prompt("deseja continuar \n s - sim \n n - não")
}

document.write(`o total de salario pago a homens foi de ${totalHomens} <br>`)
document.write(`o total de salario pago a mulheres foi de ${totalMulheres}`)