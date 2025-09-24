function salvarTipoServico(){

    const modalidadeServico = document.getElementById("modalidadeServico").value.trim();

    //private String modalidadeServico;

    var headers= new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    fetch( "http://127.0.0.1:8080/tipo_servico/cadtiposervico"  ,{
        method: "POST", 
        mode: "cors",
        cache: "no-store",

        body: JSON.stringify({
            modalidadeServico: modalidadeServico
        }),

        headers: headers


    }).then(  response =>  {
        if ( !response.ok){
            throw new Error("Erro na resposta da API")
        }
        return response.json(); // converte o corpo da resposta em JSON
    }).then(  data =>  {

        const tipoServico_id = data.id;
        console.log("Id do registro salvo: ", tipoServico_id);


        localStorage.setItem('tipoServico_id', tipoServico_id);


    }).catch(error => console.error('Erro!:', error));
}

// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById('formServico');
//     const mensagemDiv = document.getElementById('mensagem');
//     const resetButton = document.getElementById('resetButton');

//     form.addEventListener('submit', function (e) {
//         e.preventDefault();

//         const modalidadeServico = document.getElementById('modalidadeServico').value;

//         if (modalidadeServico.trim() === "") {
//             showMessage("Por favor, preencha o campo de modalidade do serviço.", "error");
//             return;
//         }

//         // Simulação de envio para o backend ou armazenamento de dados
//         setTimeout(() => {
//             showMessage("Tipo de serviço cadastrado com sucesso!", "success");
//         }, 500);
//     });

//     resetButton.addEventListener('click', () => {
//         form.reset();
//         mensagemDiv.innerHTML = '';
//     });

//     function showMessage(message, type) {
//         mensagemDiv.innerHTML = message;
//         mensagemDiv.className = 'mensagem ' + type;
//     }
// });
