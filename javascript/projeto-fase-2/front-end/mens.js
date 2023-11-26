document.getElementById('mensagemForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Cria um objeto FormData com os dados do formulário
  const formData = new FormData(this);

  // Faz uma solicitação POST assíncrona para o servidor
  fetch('/api/mensagem', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Resposta do servidor:', data);

      window.location.reload();
    })
    .catch(error => console.error('Erro:', error));
});