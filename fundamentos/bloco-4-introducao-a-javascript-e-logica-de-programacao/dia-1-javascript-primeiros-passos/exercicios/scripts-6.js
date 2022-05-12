let nome = "Cavalo";
let peca = nome.toLowerCase();

if(peca == "rei"){
    console.log("Qualquer direção de casa em casa");
}
else if(peca == "rainha"){
    console.log("Livre movimentação na horizontal, vertical e diagonais");
}
else if(peca == "torre"){
    console.log("Sem restrição de número de casas e em todas as direções (frente, trás, direita, esquerda)");
}
else if(peca == "bispo"){
    console.log("Sem restrição de número de casas, mas somente no sentido diagonal");
}
else if(peca == "cavalo"){
    console.log("Movimentos em “L”");
}
else if(peca == "peao"){
    console.log("Movimentos frontais e ataques diagonais");
}
else{
    console.log("Peça inválida");
}

