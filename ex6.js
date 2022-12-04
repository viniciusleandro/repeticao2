let largura = parseFloat(prompt("digite a largura do terreno da sua casa"));
let comprimento = parseFloat(prompt("digite o comprimento da casa"));
let totalArea = largura * comprimento;
if (totalArea <= 100) {
    document.write(`voce tem um total de area de ${totalArea}m2 você esta na classificação de TERRENO POPULAR`)
}else if(totalArea > 100 && totalArea <= 500){
    document.write(`voce tem um total de area de ${totalArea}m2 você esta na classificação de TERRENO MASTER`)
}else{
    document.write(`voce tem um total de area de ${totalArea}m2 você esta na classificação de TERRENO VIP`)
}