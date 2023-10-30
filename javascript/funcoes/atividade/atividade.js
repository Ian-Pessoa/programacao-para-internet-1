// FATORIAL DE 0 A 10
let numero = -1
const div = document.getElementById("resultado")

while(isNaN(numero)|| numero < 0 || numero > 10){
  numero = +prompt("Entre com um número de 1 a 10")
}

const fatorial = function (num){
  if(num === 0){
    return 1
  }
  return num * fatorial(num -1)
}


function fatorial2(num) {
  return num === 0 ? 1 : num * fatorial2(num-1)
}

const fatorial3 = num => num === 0 ? 1 : num * fatorial2(num-1)

const resultado = fatorial3(numero)

const p = document.createElement("p")
p.textContent = resultado
div.appendChild(p)