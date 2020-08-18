// Os leões baios são animais territoriais. Seu território
// compreende cerca de 320km² por indivíduo, exceto quando
// formam casais, nesse caso o casal costuma dominar uma
// área de 400km², juntos. Considerando que existam 9
// fêmeas e 5 machos em determinada reserva ambiental.
// Elaborar um programa no qual você deve digitar quantos
// casais (dados de pesquisa de campo) existem dentre esse
// total e mostrar na tela a soma geral de área dominada,
// incluindo todos indivíduos.

let territorio_individuo = 320;
let territorio_casal = 400;

let leoes = 14;
// 9 fêmeas e 5 machos

var total_casais = Number(prompt("Quantos casais há?"));

leoes -= total_casais * 2;
// a àrea dominada

var calculo = territorio_individuo * leoes + territorio_casal * total_casais;

alert(`A área dominada é de ${calculo} km²`);
