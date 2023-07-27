const prompt = require("prompt-sync")();
var n1 = Number(prompt("Digite um número: "));
var n2 = Number(prompt("Digite o segundo número: "));
var n3 = Number(prompt("Digite o terceiro número: "));
var media = (n1 + n2 + n3) / 3 
console.log(`A média dos números é: ${media}`);