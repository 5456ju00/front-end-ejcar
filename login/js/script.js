document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('formLogin');
    const mensagemDiv = document.getElementById('mensagem');
    const resetButton = document.getElementById('resetButton');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const usuario = document.getElementById('usuario').value;
        const senha = document.getElementById('senha').value;
        const email = document.getElementById('email').value;

        // Verificação simples para garantir que os campos estão preenchidos
        if (!usuario || !senha || !email) {
            showMessage("Por favor, preencha todos os campos.", "error");
            return;
        }

        // Simulação de envio de dados
        setTimeout(() => {
            showMessage("Login realizado com sucesso!", "success");
        }, 500);
    });

    resetButton.addEventListener('click', () => {
        form.reset();
        mensagemDiv.innerHTML = '';
    });

    window.location.href = 'sucesso.html'; 
    function showMessage(message, type) {
        mensagemDiv.innerHTML = message;
        mensagemDiv.className = 'mensagem ' + type;
    }
});
