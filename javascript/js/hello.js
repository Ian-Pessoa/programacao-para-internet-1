////alert("Hello World!")
//console.log("Hello World!")
//
//// Variáveis
//
//if (true) {
//  let x ="olá"
//  console.log(x)
//}
//let x ="mundo"
//console.log(x)
//const y = 32
//
//// Tipagem
//
//let idade = 32
//let peso = 69.5
//let nome = "João"
//let sobrenome = 'Doe'
//
//let temSol = true
//let temChuva = false
//let z //undefined
//let pessoa = null
//
//let frutasPreferidas = ["Maçã", "Laranja", "Melancia"]
//let teste = ["Carro", 1, 1.25]
//console.log(frutasPreferidas)
//console.log(teste)
//
////NaN
//
//let objetoNumero = parseInt(12)
//console.log(objetoNumero)
//
//let objetoPalavra = parseInt("Eu")
//console.log(objetoPalavra) 

//let estudante1 = {
//  nome: "João",
//  idade: 34,
//  nota1: 5.5,
//  nota2: 9,
//  endereco: {
//    rua: 'Rua 1',
//    bairro: 'Bairro 1',
//    numero: 0
//  }
//}
//
//let estudante2 = {
//  nome: "Maria",
//  idade: 32,
//  nota1: 8.5,
//  nota2: 6.5,
//}
//
////acessando propriedade
//console.log(estudante1.nome)
//console.log(estudante1["nome"])
//
//console.log(estudante1.endereco.rua)
//console.log(estudante2?.endereco?.rua)
//
////acessar posição em array
//let frutasPreferidas = ["Maçã", "Laranja", "Melancia"]
//console.log(frutasPreferidas[1])
//
//parseInt("12") + 1
//
////trabalhando com strings
//console.log("Olá " + "Mundo")
//
////template string
//let mensagem1 = "João"
//let mensagem2 = "Silva"
//let resultado = `O seu usuário é: ${mensagem1} da ${mensagem2}`
//console.log(resultado)

let paragrafo = document.getElementById("paragrafo1")
console.log(paragrafo)
paragrafo.innerText= "o texto foi modificado com sucesso!"

let div = document.getElementById("div1")
//section
let section = document.createElement("section")

//h1
let h1 = document.createElement("h1")
h1.textContent = "Meus filmes favoritos"

//p
let p = document.createElement("p")
p.innerText = "Lista dos meus filmes favoritos:"

section.appendChild(h1)
section.appendChild(p)

div.appendChild(section)

// obtendo paragrafos dentro de uma div
let div2= document.getElementById("div2")
let p2 = div2.querySelectorAll("p")

for (let x=0; x<p2.length; x++){
  p2[x].innerText = "Paragrafo alterado"
  p2[x].style.color = "blue"
}
