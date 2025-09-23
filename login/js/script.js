function salvarLogin(){

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const telefone = document.getElementById("telefone").value.trim();

    var headers= new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    fetch( "http://127.0.0.1:8080/login/cadlogin"  ,{
        method: "POST", 
        mode: "cors",
        cache: "no-store",

        body: JSON.stringify({
            usuario: usuario,
            senha: senha,
            telefone: telefone
        }),

        headers: headers


    }).then(  response =>  {
        if ( !response.ok){
            throw new Error("Erro na resposta da API")
        }
        return response.json(); // converte o corpo da resposta em JSON
    }).then(  data =>  {

        const login_id = data.id;
        console.log("Id do registro salvo: ", login_id);


        localStorage.setItem('id_login', login_id);

    }).catch(error => console.error('Erro!:', error));

}



// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById('formLogin');
//     const mensagemDiv = document.getElementById('mensagem');
//     const resetButton = document.getElementById('resetButton');

//     form.addEventListener('submit', function (e) {
//         e.preventDefault();

//         const usuario = document.getElementById('usuario').value;
//         const senha = document.getElementById('senha').value;
//         const email = document.getElementById('email').value;

//         // Verificação simples para garantir que os campos estão preenchidos
//         if (!usuario || !senha || !email) {
//             showMessage("Por favor, preencha todos os campos.", "error");
//             return;
//         }

//         // Simulação de envio de dados
//         setTimeout(() => {
//             showMessage("Login realizado com sucesso!", "success");
//         }, 500);
//     });

//     resetButton.addEventListener('click', () => {
//         form.reset();
//         mensagemDiv.innerHTML = '';
//     });

//     window.location.href = 'sucesso.html'; 
//     function showMessage(message, type) {
//         mensagemDiv.innerHTML = message;
//         mensagemDiv.className = 'mensagem ' + type;
//     }
// });
