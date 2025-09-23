function salvarOrcamento(){

    const maoDeObra = document.getElementById("maoDeObra").value.trim();
    const produto = document.getElementById("produto").value.trim();
    const codigoOrcamento = document.getElementById("codigoOrcamento").value.trim();


    var headers= new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    fetch( "http://127.0.0.1:8080/orcamento/cadorca"  ,{
        method: "POST", 
        mode: "cors",
        cache: "no-store",

        body: JSON.stringify({
            maoDeObra: maoDeObra,
            produto: produto,
            codigoOrcamento: codigoOrcamento
        }),

        headers: headers


    }).then(  response =>  {
        if ( !response.ok){
            throw new Error("Erro na resposta da API")
        }
        return response.json(); // converte o corpo da resposta em JSON
    }).then(  data =>  {

        const orcamento_id = data.id;
        console.log("Id do registro salvo: ", orcamento_id);


        localStorage.setItem('id_orcamento', orcamento_id);


    }).catch(error => console.error('Erro!:', error));
}


// function salvarOrcamento(){

//     document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById('formOrcamento');
//     const mensagemDiv = document.getElementById('mensagem');
//     const resetButton = document.getElementById('resetButton');

//     form.addEventListener('submit', function (e) {
//         e.preventDefault();

//         const maoDeObra = document.getElementById('maoDeObra').value;
//         const produto = document.getElementById('produto').value;
//         const codigoOrcamento = document.getElementById('codigoOrcamento').value;

//         if (!maoDeObra || !produto || !codigoOrcamento) {
//             showMessage("Por favor, preencha todos os campos corretamente.", "error");
//             return;
//         }

//         // Simulação de envio para o backend ou armazenamento de dados
//         setTimeout(() => {
//             showMessage("Orçamento cadastrado com sucesso!", "success");
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
//     });

// }
