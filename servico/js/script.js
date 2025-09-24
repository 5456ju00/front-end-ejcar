function salvarServico(){

    const funcionario = document.getElementById("funcionario").value.trim();
    const servicoRealizado = document.getElementById("servicoRealizado").value.trim();
    const data = document.getElementById("data").value.trim();
    const orcamento = document.getElementById("orcamento").value.trim();
    const tipoServico = document.getElementById("tipoServico").value.trim();
    const produto = document.getElementById("produto").value.trim();


    // private String funcionario;
    // private String servicoRealizado;
    // private Date data;
    // private String orcamento;
    // private String tipoServico;
    // private String produto;

    var headers= new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    fetch( "http://127.0.0.1:8080/servico/cadservico"  ,{
        method: "POST", 
        mode: "cors",
        cache: "no-store",

        body: JSON.stringify({
            funcionario: funcionario,
            servicoRealizado: servicoRealizado,
            data: data,
            orcamento: orcamento,
            tipoServico: tipoServico,
            produto: produto
        }),

        headers: headers


    }).then(  response =>  {
        if ( !response.ok){
            throw new Error("Erro na resposta da API")
        }
        return response.json(); // converte o corpo da resposta em JSON
    }).then(  data =>  {

        const servico_id = data.id;
        console.log("Id do registro salvo: ", servico_id);


        localStorage.setItem('id_servico', servico_id);


    }).catch(error => console.error('Erro!:', error));
}

// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById('formServico');
//     const mensagemDiv = document.getElementById('mensagem');
//     const resetButton = document.getElementById('resetButton');

//     form.addEventListener('submit', function (e) {
//         e.preventDefault();

//         const funcionario = document.getElementById('funcionario').value;
//         const servicoRealizado = document.getElementById('servicoRealizado').value;
//         const data = document.getElementById('data').value;
//         const orcamento = document.getElementById('orcamento').value;
//         const tipoServico = document.getElementById('tipoServico').value;
//         const produto = document.getElementById('produto').value;

//         if (!funcionario || !servicoRealizado || !data || !orcamento || !tipoServico || !produto) {
//             showMessage("Por favor, preencha todos os campos.", "error");
//             return;
//         }

//         // Simulação de envio para o backend ou armazenamento de dados
//         setTimeout(() => {
//             showMessage("Serviço cadastrado com sucesso!", "success");
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
