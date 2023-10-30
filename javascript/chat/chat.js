const input = document.getElementById("input")
const div = document.getElementById("div")

input.addEventListener("keypress", enviarMensagem)

function enviarMensagem(evento) {
  if (evento.key === 'Enter') {
    const p = document.createElement("p")
    p.innerText = evento.target.value
    div.appendChild(p)
    evento.target.value = ""
  }
}