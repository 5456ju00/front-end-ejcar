document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('formServico');
    const mensagemDiv = document.getElementById('mensagem');
    const resetButton = document.getElementById('resetButton');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const modalidadeServico = document.getElementById('modalidadeServico').value;

        if (modalidadeServico.trim() === "") {
            showMessage("Por favor, preencha o campo de modalidade do serviço.", "error");
            return;
        }

        // Simulação de envio para o backend ou armazenamento de dados
        setTimeout(() => {
            showMessage("Tipo de serviço cadastrado com sucesso!", "success");
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
