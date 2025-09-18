document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('formServico');
    const mensagemDiv = document.getElementById('mensagem');
    const resetButton = document.getElementById('resetButton');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const funcionario = document.getElementById('funcionario').value;
        const servicoRealizado = document.getElementById('servicoRealizado').value;
        const data = document.getElementById('data').value;
        const orcamento = document.getElementById('orcamento').value;
        const tipoServico = document.getElementById('tipoServico').value;
        const produto = document.getElementById('produto').value;

        if (!funcionario || !servicoRealizado || !data || !orcamento || !tipoServico || !produto) {
            showMessage("Por favor, preencha todos os campos.", "error");
            return;
        }

        // Simulação de envio para o backend ou armazenamento de dados
        setTimeout(() => {
            showMessage("Serviço cadastrado com sucesso!", "success");
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
