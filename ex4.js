let nome = prompt("digite seu nome")
let compras = parseFloat(prompt("digite o valor total das compras"))
let descontoHomens = 0.05
let descontoMulheres = 0.13
let repetir = true
while (repetir == true) {
    let sexo = prompt("digite seu sexo masculino ou feminino")
    if (sexo == "masculino" || sexo == "feminino") {
        if (sexo == "masculino") {
            compras = compras - (compras * descontoHomens)
            document.write("seu sexo foi " + sexo + " e voce obteve um total de " + compras)
            repetir = false
        } else {
            compras = compras - (compras * descontoMulheres)
            document.write("seu sexo foi " + sexo + " e voce obteve um total de " + compras)
            repetir = false
        }
    } else {
        alert("sexo invalido")
    }
}