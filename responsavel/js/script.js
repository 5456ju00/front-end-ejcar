function salvarResponsavel(){

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const cep = document.getElementById("cep").value.trim();
    const endereco = document.getElementById("endereco").value.trim();

    var headers= new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    fetch( "http://127.0.0.1:8080/responsavel/cadresp"  ,{
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
    document.getElementById("formResponsavel").reset();

    alert("Cadastrado com Sucesso");
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