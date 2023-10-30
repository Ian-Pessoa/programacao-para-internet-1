window.addEventListener("load", main)

function main() {
  const div = document.getElementById("tela")
  const p = document.querySelector("p")
  
  div.addEventListener("mousemove", mostrarMensagem)
  div.addEventListener("mousedown", mudarCor)
  div.addEventListener("mouseup", retornarCor)
  
  function mostrarMensagem(evento){
    console.log(evento)
    console.log("A div foi clicada")
    const textoFinal = `Posição X:${evento.x} - Y:${evento.y}`
    p.textContent = textoFinal
  }

  function mudarCor(evento){
    evento.target.style.backgroundColor = "blue"
  }

  function retornarCor(evento) {
    evento.target.style.backgroundColor = "blueviolet"
  }
}
