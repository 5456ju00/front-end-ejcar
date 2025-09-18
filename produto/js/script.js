document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('formProduto');
    const mensagemDiv = document.getElementById('mensagem');
    const resetButton = document.getElementById('resetButton');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const descricao = document.getElementById('descricao').value;
        const valor = parseFloat(document.getElementById('valor').value);

        if (!descricao || isNaN(valor) || valor <= 0) {
            showMessage("Por favor, preencha todos os campos corretamente.", "error");
            return;
        }

        // Simulação de envio para o backend ou armazenamento de dados
        setTimeout(() => {
            showMessage("Produto cadastrado com sucesso!", "success");
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
