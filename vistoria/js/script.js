// assinatura no canvas
const canvas = document.getElementById("assinatura");
const ctx = canvas.getContext("2d");
let desenhando = false;

canvas.addEventListener("mousedown", () => (desenhando = true));
canvas.addEventListener("mouseup", () => (desenhando = false));
canvas.addEventListener("mousemove", desenhar);

function desenhar(event) {
  if (!desenhando) return;
  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.arc(event.offsetX, event.offsetY, 2, 0, Math.PI * 2);
  ctx.fill();
}

document.getElementById("limparAssinatura").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// envio do formulário
document.getElementById("formVistoria").addEventListener("submit", function (e) {
  e.preventDefault();

  if (!document.getElementById("aceite").checked) {
    alert("Você precisa concordar com as condições antes de prosseguir!");
    return;
  }

  const vistoria = {
    pneu: document.getElementById("pneu").checked,
    step: document.getElementById("step").checked,
    macaco: document.getElementById("macaco").checked,
    chaveRoda: document.getElementById("chaveRoda").checked,
    outro: document.getElementById("outro").value
  };

  console.log("Dados enviados:", vistoria);
  alert("Vistoria concluída com sucesso!");
});
