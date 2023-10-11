let numero = prompt("Insira um número aleatorio de 1 a 10")
const aleatorio = parseInt(Math.floor(Math.random() * 10 + 1))
let div = document.getElementById('tentativas')
let tentativas = 0

while(numero!=aleatorio){
  if(isNaN(numero) || numero < 1 || numero > 10) {
    alert("Insira apenas números de 1 a 10")
    numero = prompt("Insira um número aleatorio de 1 a 10")
  } else if (numero < aleatorio) {
    alert("O número é maior que o inserido")
    numero = prompt("Insira um número aleatorio de 1 a 10")
  } else {
    alert("O número é menor que o inserido")
    numero = prompt("Insira um número aleatorio de 1 a 10")
  } 
  tentativas++
}

tentativas++
alert("Você acertou")
const p = document.createElement("p")
p.innerText = `Foram ${tentativas} até acertar`
div.appendChild(p)