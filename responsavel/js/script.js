function salvarResponsavel(){

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const cep = document.getElementById("cep").value.trim();
    const endereco = document.getElementById("endereco").value.trim();


    console.log(nome);
    console.log(telefone);
    console.log(cpf);
    console.log(cep);
    console.log(endereco);

    var headers= new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    fetch("http://127.0.0.1:8080/responsavel/cadresp"  ,{
        method: "POST", 
        mode: "cors",
        cache: "no-cache",

        body: JSON.stringify({
            nome: nome,
            telefone: telefone,
            cpf: cpf,
            cep: cep,
            endereco: endereco
        }),

        headers: headers


    }).then(  response =>  {
        if ( !response.ok){
            throw new Error("Erro na resposta da API")
        }
        return response.json(); // converte o corpo da resposta em JSON
    }).then( async  data =>  {

        const responsavel_id = data.id;
        console.log("Id do registro salvo: ", responsavel_id);


        localStorage.setItem('id_responsavel', responsavel_id);
        alert("Cadastrado com Sucesso");

        let errorMsg;
            try {
                const data = await response.json();
                errorMsg = data.message || JSON.stringify(data);
            } catch {
                errorMsg = await response.text();
            }

            // mostra no campo telefone se for erro relacionado a ele
            if (errorMsg.toLowerCase().includes("telefone")) {
                telefoneErro.textContent = errorMsg;
            } else {
                alert("Erro: " + errorMsg);
            }

            throw new Error(errorMsg);

    }).catch(error => console.error('Erro!:', error));

        document.getElementById("formResponsavel").reset();

}

function buscarResponsavel(){

    const nome = document.getElementById("nome").value.trim();


    var headers= new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    fetch( "http://127.0.0.1:8080/responsavel/consultapornome"  ,{
        method: "POST", 
        mode: "cors",
        cache: "no-store",

        body: JSON.stringify({
            nome: nome,
            telefone: telefone,
            cpf: cpf,
            cep: cep,
            endereco: endereco
        }),

        headers: headers


    }).then(  response =>  {
        if ( !response.ok){
            throw new Error("Erro na resposta da API")
        }
        return response.json(); // converte o corpo da resposta em JSON
    }).then(  data =>  {

        const responsavel_id = data.id;
        console.log("Id do registro salvo: ", responsavel_id);


        localStorage.setItem('id_responsavel', responsavel_id);

    }).catch(error => console.error('Erro!:', error));

}

  function limparCampos() {
    // Limpa os campos do formulário
   
}