// Um hotel possui 130 leitos no total, mas devido a problemas, está atendendo somente com capacidade de 50% leitos, sendo que desses, 25 estão ocupados pelas próximas semanas.  Faça um programa que o usuário digite o número de pessoas que entra (com números positivos) e o número de pessoas que saem (com números negativos). Caso a capacidade de leitos vagos seja ultrapassada, mostrar mensagem “não é possível pois ultrapassa a capacidade em X leitos”, sendo X o número a mais de hóspedes que ficariam sem leito.

const leitos = 40;
// (130 / 2) - 25
// const pois 40 é fixo

let leitosVagos = leitos;

while (leitosVagos <= leitos) {
  let entrada = Number(
    prompt(
      `Existem ${leitosVagos} leitos. \n Quantas pessoas entram ou saem (+ ou -):`
    )
  );

  var calc = leitosVagos - entrada;

  if (calc > leitosVagos) {
    if (calc > leitos)
      alert(
        `Não é possível criar novas vagas pois ultrapassa em ${calc} leitos`
      );
    else leitosVagos = calc;
  } else {
    leitosVagos = calc;
  }
}
// feito em aula

// let leitosvagos = 40;
// let contagemleitos = 0;

// while (contagemleitos < leitosvagos) {
//   let entrada = Number(
//     prompt(
//       `Existem ${
//         leitosvagos - contagemleitos
//       } leitos vagos. Quantas pessoas entram ou saem (+ ou -): `
//     )
//   );
//   contagemleitos += entrada;
// }

// let leitosexcedidos = contagemleitos - leitosvagos;

// alert(
//   `Não é possível pois ultrapassa a capacidade em ${leitosexcedidos} leitos.`
// );
