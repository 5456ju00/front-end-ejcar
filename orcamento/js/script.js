document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('formOrcamento');
  const mensagemDiv = document.getElementById('mensagem');
  const resetButton = document.getElementById('resetButton');

  form.addEventListener('submit', function (e) {
      e.preventDefault();

      const maoDeObra = document.getElementById('maoDeObra').value;
      const produto = document.getElementById('produto').value;
      const codigoOrcamento = document.getElementById('codigoOrcamento').value;

      if (!maoDeObra || !produto || !codigoOrcamento) {
          showMessage("Por favor, preencha todos os campos corretamente.", "error");
          return;
      }

      // Simulação de envio para o backend ou armazenamento de dados
      setTimeout(() => {
          showMessage("Orçamento cadastrado com sucesso!", "success");
      }, 500);
  });

  resetButton.addEventListener('click', () => {
      form.reset();
      mensagemDiv.innerHTML = '';
  });

  function showMessage(message, type) {
      mensagemDiv.innerHTML = message;
      mensagemDiv.className = 'mensagem ' + type;
  }
});
