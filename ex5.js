let distancia = parseFloat(prompt("digite a distancia que deseja percorrer"))
let valorPassagem = 0
if (distancia <= 200) {
    valorPassagem = distancia * 0.45
} else {
    valorPassagem = distancia * 0.50
}

document.write(`voce irá pagar um total de ${valorPassagem} ao final da viagem`)