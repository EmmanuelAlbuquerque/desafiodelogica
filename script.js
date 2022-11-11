let array = [0, 0, 0];
let count = 0;

function aleatório() {
  for (let i = 0; i < array.length; i++) {
    array[i] = parseInt(Math.random() * 3) + 1;
  }
}
function jogo() {
  aleatório();

  let jogoant = [...array];

  if (
    array[0] == jogoant[0] &&
    array[1] == jogoant[1] &&
    array[2] == jogoant[2]
  ) {
    count++;
    if (count == 1) {
      console.log(`porta ${count} aberta!`);
    } else if (count == 2) {
      console.log(`porta ${count} aberta!`);
    } else if (count == 3) {
      console.log(`porta ${count} aberta!`);
    }
  } else console.log(`Tente Novamente!`);
}
for (let i = 0; i < 20; i++) {
  jogo();
}
