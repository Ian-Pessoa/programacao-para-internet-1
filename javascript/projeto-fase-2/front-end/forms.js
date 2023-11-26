// script.js
document.getElementById('reservaForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Cria um objeto FormData com os dados do formulário
  const formData = new FormData(this);

  // Faz uma solicitação POST assíncrona para o servidor
  fetch('/api/form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Resposta do servidor:', data);
      // Você pode adicionar aqui lógica adicional, se necessário

      // Recarrega a página após o envio bem-sucedido
      window.location.reload();
    })
    .catch(error => console.error('Erro:', error));
});