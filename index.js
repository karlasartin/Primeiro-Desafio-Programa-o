//declaração e atribuição de valores às variáveis
let nomeJogador = "Karla"
let xp = 1000
let nivel = ""
let rodada = 1

// estrutura de repetição

while (xp < 11000){
   
// estrutura de decisão e operadores de comparação
if (xp <= 1000){
    nivel = "Ferro"
}else if (xp<=2000){
    nivel = "Bronze"
    }
else if (xp<=5000){
    nivel = "Prata"
}
else if (xp<=7000){
    nivel = "Ouro"
}
else if (xp<=8000){
    nivel = "Platina"
}
else if (xp<=9000){
    nivel = "Ascendente"
}
else if (xp<10000){
    nivel = "Imortal"
}
else if (xp>=10000){
    nivel = "Radiante"
}

console.log("O heroi de nome: " + nomeJogador+ "está no nível: " +nivel+ "na rodada de número: " + rodada + " com " + xp + " pontos")
xp = xp + 
rodada ++
}
rodada = 1