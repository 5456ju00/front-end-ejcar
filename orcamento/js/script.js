let listaProduto = [];
let listaVeiculo = [];

window.onload = () => {
  //Produto
    fetch("http://127.0.0.1:8080/produto/listarProduto")
      .then(res => {
        if (!res.ok) throw new Error("Erro ao buscar produto");
        return res.json();
      })
      .then(data => {
        listaProduto = data; // salva os endereços no array
        const produtoSelect = document.getElementById("produtoSelect");
        produtoSelect.innerHTML = '<option value="">Selecione um produto</option>';
  
        data.forEach(produto => {
          const option = document.createElement("option");
          option.value = produto.id;
          option.textContent = `${produto.descricao}`;
          produtoSelect.appendChild(option);
        });
      })
      .catch(error => {
        console.error("Erro ao carregar produto:", error);
        const produtoSelect = document.getElementById("produtoSelect");
        produtoSelect.innerHTML = '<option value="">Erro ao carregar produto</option>';
      });

     //Veiculo 
      fetch("http://127.0.0.1:8080/veiculo/listarVeiculo")
      .then(res => {
        if (!res.ok) throw new Error("Erro ao buscar Veiculo");
        return res.json();
      })
      .then(data => {
        listaVeiculo = data; // salva os endereços no array
        const veiculoSelect = document.getElementById("veiculoSelect");
        veiculoSelect.innerHTML = '<option value="">Selecione um Veiculo</option>';
  
        data.forEach(veiculo => {
          const option = document.createElement("option");
          option.value = veiculo.id;
          option.textContent = `${veiculo.placa}`;
          veiculoSelect.appendChild(option);
        });
      })
      .catch(error => {
        console.error("Erro ao carregar Veiculo:", error);
        const veiculoSelect = document.getElementById("veiculoSelect");
        veiculoSelect.innerHTML = '<option value="">Erro ao carregar Veiculo</option>';
      });
  };


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
