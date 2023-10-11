let idade = prompt("Entre com a sua idade")

idade = +idade
let body = document.querySelector("body")
let p = document.createElement("p")

if (isNaN(idade)){
  p.innerText = "Isso não é um número"
}else {
  p.innerText= idade >= 18 ?"Maior de idade" : "Menor de idade"
}
body.appendChild(p)

