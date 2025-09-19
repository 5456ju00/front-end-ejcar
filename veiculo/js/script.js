function salvarVeiculo(){

    const responsavel = document.getElementById("responsavel").value.trim();
    const modelo = document.getElementById("modelo").value.trim();
    const placa = document.getElementById("placa").value.trim();
    const ano = document.getElementById("ano").value.trim();
    const cor = document.getElementById("cor").value.trim();
    const chassi = document.getElementById("chassi").value.trim();

    var headers= new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    fetch( "http://127.0.0.1:8080/veiculo/cadveiculo"  ,{
        method: "POST", 
        mode: "cors",
        cache: "no-store",

        body: JSON.stringify({
            responsavel: responsavel,
            modelo: modelo,
            placa: placa,
            ano: ano,
            cor: cor,
            chassi: chassi
        }),

        headers: headers


    }).then(  response =>  {
        if ( !response.ok){
            throw new Error("Erro na resposta da API")
        }
        return response.json(); // converte o corpo da resposta em JSON
    }).then(  data =>  {

        const veiculo_id = data.id;
        console.log("Id do registro salvo: ", veiculo_id );


        localStorage.setItem('id_veiculo', veiculo_id );

    }).catch(error => console.error('Erro!:', error));

}

// scripts.js

document.getElementById("formVeiculo").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Coleta os dados do formulário
    const modelo = document.getElementById("modelo").value;
    const placa = document.getElementById("placa").value;
    const ano = document.getElementById("ano").value;
    const cor = document.getElementById("cor").value;
    const chassi = document.getElementById("chassi").value;

    // Validação simples
    if (!modelo || !placa || !ano || !cor || !chassi) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Cria o objeto de agendamento
    const veiculo = {
        modelo: modelo,
        placa: placa,
        ano: ano,
        cor: cor,
        chassi: chassi
    };

    // Exibe o resultado do agendamento
    document.getElementById("resultado").innerHTML = `
        <h2>Agendamento Confirmado!</h2>
        <p><strong>Modelo:</strong> ${veiculo.modelo}</p>
        <p><strong>Placa:</strong> ${veiculo.placa}</p>
        <p><strong>Ano:</strong> ${veiculo.ano}</p>
        <p><strong>Cor:</strong> ${veiculo.cor}</p>
        <p><strong>Chassi:</strong> ${veiculo.chassi}</p>
    `;

    // Limpa os campos após o agendamento
    document.getElementById("formVeiculo").reset();
});

function limparCampos() {
    // Limpa os campos do formulário
    document.getElementById("formVeiculo").reset();
    document.getElementById("resultado").innerHTML = ''; // Limpa o resultado exibido
}

