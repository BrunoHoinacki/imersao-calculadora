/* Scripts de JS da calculadora */

var nome = "Bruno";

var notaDoPrimeiroBimestre = 9;
var notaDoSegundoBimestre = 7;
var notaDoTerceiroBimestre = 4;
var notaDoQuartoBimestre = 2;

var NotaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4;

var notaFixada = NotaFinal.toFixed(1);

console.log('Bem vindo ' + nome);
console.log(notaFixada);
