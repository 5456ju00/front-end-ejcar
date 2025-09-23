// assinatura no canvas
const canvas = document.getElementById("assinatura");
const ctx = canvas.getContext("2d");
let desenhando = false;

canvas.addEventListener("mousedown", () => (desenhando = true));
canvas.addEventListener("mouseup", () => (desenhando = false));
canvas.addEventListener("mousemove", desenhar);

function salvarVistoria(){

  const fluxo = document.getElementById("fluxo").value.trim();
  const step = document.getElementById("step").value.trim();
  const chaveDeRoda = document.getElementById("chaveDeRoda").value.trim();
  const macaco = document.getElementById("macaco").value.trim();
  const outro = document.getElementById("outro").value.trim();

  var headers= new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Origin", "*");

  fetch( "http://127.0.0.1:8080/Vistoria/vistoria"  ,{
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


  }).then(  response =>  {
      if ( !response.ok){
          throw new Error("Erro na resposta da API")
      }
      return response.json(); // converte o corpo da resposta em JSON
  }).then(  data =>  {

      const vistoria_id = data.id;
      console.log("Id do registro salvo: ", vistoria_id);


      localStorage.setItem('id_vistoria', vistoria_id);

  }).catch(error => console.error('Erro!:', error));

}




































// <<<<<<< HEAD
//     var headers = new Headers();
//     headers.append("Content-Type", "application/json");
//     headers.append("Access-Control-Allow-Origin", "*");

//     fetch("http://127.0.0.1:8080/vistoria/cadvistoria", {
//         method: "POST",
//         mode: "cors",
//         cache: "no-store",
//         body: JSON.stringify({
//             fluxo: fluxo,
//             step: step,
//             chaveDeRoda: chaveDeRoda,
//             macaco: macaco,
//             outro: outro
//         }),
//         headers: headers
//     }).then(response => {
//         if (!response.ok) {
//             throw new Error("Erro na resposta da API");
//         }
//         return response.json(); // converte o corpo da resposta em JSON
//     }).then(data => {
//         const vistoria_id = data.id;
//         console.log("Id do registro salvo: ", vistoria_id);
//         window.location.href = 'sucesso.html'; 
//         localStorage.setItem('id_vistoria', vistoria_id);
//     }).catch(error => console.error('Erro!:', error));
// =======
// function desenhar(event) {
//   if (!desenhando) return;
//   ctx.fillStyle = "#000";
//   ctx.beginPath();
//   ctx.arc(event.offsetX, event.offsetY, 2, 0, Math.PI * 2);
//   ctx.fill();
// >>>>>>> bf937af6ef94aadc20eb366042c842cb9f36ed36
// }

// document.getElementById("limparAssinatura").addEventListener("click", () => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
// });

// // envio do formulário
// document.getElementById("formVistoria").addEventListener("submit", function (e) {
//   e.preventDefault();

//   if (!document.getElementById("aceite").checked) {
//     alert("Você precisa concordar com as condições antes de prosseguir!");
//     return;
//   }

//   const vistoria = {
//     pneu: document.getElementById("pneu").checked,
//     step: document.getElementById("step").checked,
//     macaco: document.getElementById("macaco").checked,
//     chaveRoda: document.getElementById("chaveRoda").checked,
//     outro: document.getElementById("outro").value
//   };

//   console.log("Dados enviados:", vistoria);
//   alert("Vistoria concluída com sucesso!");
// });
