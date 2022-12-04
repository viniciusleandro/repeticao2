let valorInicial = parseInt(prompt("digite o valor inicial da contagem"))
let valorFinal = parseInt(prompt("digite o valor final a contagem"))
let incremento = parseInt(prompt("digite o incremento da contagem ex: 3 = 3,6,9,12,15"))
for (let i = valorInicial; i <= valorFinal; i+= incremento) {
        document.write(i +"<br>")
}
document.write("ACABOU!")