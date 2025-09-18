document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('formAgendamento');
    const mensagemDiv = document.getElementById('mensagem');
    const resetButton = document.getElementById('resetButton');
    const temSeguradora = document.getElementById('temSeguradora');
    const seguradoraInfo = document.getElementById('seguradoraInfo');

    // Exibe ou oculta os campos da seguradora com base no checkbox
    temSeguradora.addEventListener('change', () => {
        if (temSeguradora.checked) {
            seguradoraInfo.style.display = 'block';
        } else {
            seguradoraInfo.style.display = 'none';
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const dataEntrada = document.getElementById('dataEntrada').value;
        const dataSaida = document.getElementById('dataSaida').value;
        const nomeSeguradora = document.getElementById('nomeSeguradora').value;
        const numeroSeguradora = document.getElementById('numeroSeguradora').value;

        // Verificação básica para garantir que os campos necessários estão preenchidos
        if (!dataEntrada || !dataSaida || (temSeguradora.checked && (!nomeSeguradora || !numeroSeguradora))) {
            showMessage("Por favor, preencha todos os campos corretamente.", "error");
            return;
        }

        // Simulação de envio de dados
        setTimeout(() => {
            showMessage("Agendamento concluído com sucesso!", "success");
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
