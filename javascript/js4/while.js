let aleatorio = Math.floor(Math.random() * 10 + 1)
let resultado
let div = document.getElementById("tentativas")

do{
  resultado = prompt("Entre com um número de 1 a 10")
  resultado = +resultado
  let p = document.createElement("p")
  p.innetText = resultado
  div.appendChild(p)
} while (resultado !== aleatorio || isNaN(resultado))

let p = document.createElement("p")
p.innerHTML = `Parabéns o número é ${resultado}`
div.appendChild(p)