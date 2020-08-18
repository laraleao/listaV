// Você vai assistir a um filme no cinema e decide comprar
// algumas guloseimas antes de entrar para a sessão. O
// cinema oferece pipoca por 6 reais a unidade, chocolate por
// 3 reais a unidade e refrigerante por 8,50 reais a unidade.
// Faça um programa que pergunte quantos tipos de
// guloseimas você vai querer (1, 2 ou 3) e que após isso
// pergunte qual a guloseima e a quantidade (unidades). Ao
// final deve ser mostrado o valor total.
// Exemplo: Digitei que quero 2 guloseimas, o programa me
// pergunta qual guloseima, eu digito “pipoca” e em seguida
// ele pergunta a quantidade, eu digito 2. Em seguida ele pergunta
// qual a segunda guloseima, eu digito refrigerante, quantidade 1.
// Nesse caso o total seria 2 x 6,00 + 1 x 8,50 = R$20,50.

let quantidade_gulos = Number(
  prompt("Quantos tipos de guloseimas você vai querer?")
);
let total = 0;

for (i = 0; i < quantidade_gulos; i++) {
  var guloseima = prompt("Qual a guloseima você deseja?");

  var valorGuloseima = 0;

  switch (guloseima) {
    case "pipoca":
      valorGuloseima = 6;
      break;
    case "chocolate":
      valorGuloseima = 3;
      break;
    case "refrigerante":
      valorGuloseima = 8.5;
      break;
  }

  var quantidade = prompt(`Qual a quantidade?`);

  var calculo = valorGuloseima * quantidade;
  total += calculo;
}

alert(`O total foi de: ${total}`);
