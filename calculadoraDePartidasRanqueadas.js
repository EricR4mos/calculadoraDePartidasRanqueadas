 
function partidasRanqueadas(win,lose){
  let streak = win - lose;
  return streak
}

let vitorias = prompt("Quantidade de vitórias?")
let derrotas = prompt("Quantidase de derrotas?")

let totalWins = partidasRanqueadas(vitorias,derrotas);
 
 let nivel = ""
 
if (totalWins <=10){
  nivel = "Ferro";
} else if (totalWins >= 11 && totalWins <= 20 ){
  nivel = "Bronze";
} else if (totalWins >= 21 && totalWins <= 50 ){
  nivel = "Prata";
} else if (totalWins >= 51 && totalWins <= 80 ){
  nivel = "Ouro";
} else if (totalWins >= 81 && totalWins <= 90 ){
  nivel = "Diamante";
} else if (totalWins >= 91 && totalWins <= 100 ){
  nivel = "Lendário";
} else {
  nivel = "Imortal";
};

console.log(`O heró tem de saldo ** ${totalWins} ** vitórias, está no nivel ** ${nivel} **`);


