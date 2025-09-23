function salvarProduto(){

    const descricao = document.getElementById("descricao").value.trim();
    const valor = document.getElementById("valor").value.trim();


    var headers= new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    fetch( "http://127.0.0.1:8080/produto/cadproduto"  ,{
        method: "POST", 
        mode: "cors",
        cache: "no-store",

        body: JSON.stringify({
            descricao: descricao,
            valor: valor
        }),

        headers: headers


    }).then(  response =>  {
        if ( !response.ok){
            throw new Error("Erro na resposta da API")
        }
        return response.json(); // converte o corpo da resposta em JSON
    }).then(  data =>  {

        const produto_id = data.id;
        console.log("Id do registro salvo: ", produto_id);


        localStorage.setItem('id_produto', produto_id);


    }).catch(error => console.error('Erro!:', error));
}