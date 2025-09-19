// script.js

function salvarUsuario() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const user = document.getElementById("user").value.trim();
    const password = document.getElementById("password").value.trim();

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    fetch("http://127.0.0.1:8080/usuario/cadusuario", {
        method: "POST",
        mode: "cors",
        cache: "no-store",
        body: JSON.stringify({
            nome: nome,
            email: email,
            user: user,
            password: password
        }),
        headers: headers
    }).then(response => {
        if (!response.ok) {
            throw new Error("Erro na resposta da API");
        }
        return response.json(); // converte o corpo da resposta em JSON
    }).then(data => {
        const usuario_id = data.id;
        console.log("Id do registro salvo: ", usuario_id);
        window.location.href = 'sucesso.html'; 
        localStorage.setItem('id_usuario', usuario_id);
    }).catch(error => console.error('Erro!:', error));
}
