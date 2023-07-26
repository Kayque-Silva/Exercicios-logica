const prompt = require("prompt-sync")();
var idade = Number(prompt("Digite idade"));
if(idade > 18){
    console.log("Maior de idade");
} else{
    console.log("Menor de idade");
}