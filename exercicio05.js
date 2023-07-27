const prompt = require("prompt-sync")();
var numero = prompt("Digite um número ");
var resultado = numero / 2
if (resultado % 2 === 0) {
   console.log("O número é par"); 
}else {
    console.log("O número é impar")}