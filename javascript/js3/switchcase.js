let diaPreferido = parseInt(prompt("Escolha seu dia preferido"))

let mensagem;

switch(diaPreferido){
  case 1:
    mensagem = "Domingo"
    break;
  case 2:
    mensagem = "Segunda"
    break;   
  case 3: 
    mensagem = "Terça"
    break; 
  case 4: 
    mensagem = "Quarta"
    break;   
  case 5: 
    mensagem = "Quinta"
    break;
  case 6: 
    mensagem = "Sexta"
    break;  
  case 7: 
    mensagem = "Sabádo"
    break;   
}

let p = document.getElementById("dia")
p.innerText = mensagem