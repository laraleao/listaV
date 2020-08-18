// Fazer um programa no qual o usuário deve digitar 10 números entre 0 e 50. Ao final deve mostrar o maior número digitado e o menor número digitado. Os números digitados que não estiverem entre 0 e 50, devem ser desconsiderados.

menornum = 50;
maiornum = 0;

for (i = 0; i < 10; i++) {
  let numero = Number(prompt(`Digite um número:`));
  //   numero digitado pelo usuário

  // verificar se está entre 0 e 50
  if (numero >= 0 && numero <= 50) {
    //   0 <= numero <= 50 - não funcionou

    // verificar ser é menor numero
    if (numero < menornum) {
      menornum = numero;
    }

    if (numero >= maiornum) {
      maiornum = numero;
    }
  }
}

alert(
  `O menor número digitado foi ${menornum} e o maior número digitado foi ${maiornum}.`
);
