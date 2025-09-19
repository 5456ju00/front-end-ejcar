// script.js

function salvarVistoria() {
    const fluxo = document.getElementById("fluxo").value.trim();
    const step = document.getElementById("step").value.trim();
    const chaveDeRoda = document.getElementById("chaveDeRoda").value.trim();
    const macaco = document.getElementById("macaco").value.trim();
    const outro = document.getElementById("outro").value.trim();

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    fetch("http://127.0.0.1:8080/vistoria/cadvistoria", {
        method: "POST",
        mode: "cors",
        cache: "no-store",
        body: JSON.stringify({
            fluxo: fluxo,
            step: step,
            chaveDeRoda: chaveDeRoda,
            macaco: macaco,
            outro: outro
        }),
        headers: headers
    }).then(response => {
        if (!response.ok) {
            throw new Error("Erro na resposta da API");
        }
        return response.json(); // converte o corpo da resposta em JSON
    }).then(data => {
        const vistoria_id = data.id;
        console.log("Id do registro salvo: ", vistoria_id);
        window.location.href = 'sucesso.html'; 
        localStorage.setItem('id_vistoria', vistoria_id);
    }).catch(error => console.error('Erro!:', error));
}
