//let numero = 0
//
//while(isNaN(numero) || numero<1){
//  numero = +prompt("Entre com um número inteiro maior do que 0")
//}
//
//
//const div = document.getElementById("resultado")
//
//const resultado = isPar(numero)
//
//const p = document.createElement("p")
//p.textContent = resultado
//
//div.appendChild(p)
//
//function isPar(num) {
//  if (num % 2 == 0) {
//    return "Par"
//  }
//  return "ímpar"
//}




// PARADIGMA IMPERATIVO

const arrayDeNumeros = [1,2,3,4,5,6,7,8]
let arrayDeResultadosPares = []

for(let x=0; x < arrayDeNumeros.length; x++){
  if(arrayDeNumeros[x] % 2 === 0){
    arrayDeResultadosPares.push(arrayDeNumeros[x])
  }
}

console.log(arrayDeResultadosPares)

// PARADIGMA FUNCIONAL

// 2º FORMA DE DECLARAR FUNÇÃO
const isPar = function(num){
  if (num % 2 == 0){
    return true
  }
  return false
}

const arrayParUsandoFuncional = arrayDeNumeros.filter(isPar)

console.log(arrayParUsandoFuncional)


const isPar2 = function(num){
  return num % 2 === 0
}


// 3º FORMA DE DECLARAR FUNÇÃO
// ARROW FUNCTION

const isPar3 = num => num % 2 === 0

console.log(isPar3(4))