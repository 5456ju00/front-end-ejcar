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

}


// // script.js - validação simples, máscara básica e POST para /responsaveis
// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById("formResponsavel");
//     const mensagem = document.getElementById("mensagem");
//     const btnSalvar = document.getElementById("btnSalvar");
//     const btnLimpar = document.getElementById("btnLimpar");
  
//     const inputs = {
//       nome: document.getElementById("nome"),
//       telefone: document.getElementById("telefone"),
//       cpf: document.getElementById("cpf"),
//       cep: document.getElementById("cep"),
//       endereco: document.getElementBy.Id("endereco")
//     };
  
//     // máscaras simples: adiciona formatação visual (não é biblioteca)
//     inputs.telefone.addEventListener("input", e => {
//       e.target.value = maskPhone(e.target.value);
//     });
//     inputs.cpf.addEventListener("input", e => {
//       e.target.value = maskCPF(e.target.value);
//     });
//     inputs.cep.addEventListener("input", e => {
//       e.target.value = maskCEP(e.target.value);
//     });
  
//     btnLimpar.addEventListener("click", () => {
//       form.reset();
//       clearMessage();
//     });
  
//     form.addEventListener("submit", async (ev) => {
//       ev.preventDefault();
//       clearMessage();
  
//       const data = {
//         nome: inputs.nome.value.trim(),
//         telefone: normalizeNumber(inputs.telefone.value),
//         cpf: normalizeNumber(inputs.cpf.value),
//         cep: normalizeNumber(inputs.cep.value),
//         endereco: inputs.endereco.value.trim()
//       };
  
//       // validações básicas
//       const err = validar(data);
//       if (err) {
//         showMessage(err, "error");
//         return;
//       }
  
//       // desabilita botão enquanto envia
//       btnSalvar.disabled = true;
//       btnSalvar.textContent = "Salvando...";
  
//       try {
//         // Ajuste a URL se seu backend estiver em outra rota ou porta
//         const resp = await fetch("/responsaveis", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(data)
//         });
  
//         if (!resp.ok) {
//           // tenta ler mensagem do servidor
//           const body = await resp.json().catch(() => ({}));
//           const serverMsg = body.message || body.error || `Erro: ${resp.status}`;
//           showMessage(serverMsg, "error");
//         } else {
//           const saved = await resp.json().catch(() => null);
//           showMessage("Responsável salvo com sucesso ✅", "success");
//           form.reset();
//         }
//       } catch (error) {
//         showMessage("Falha ao conectar com o servidor. Verifique sua API.", "error");
//         console.error(error);
//       } finally {
//         btnSalvar.disabled = false;
//         btnSalvar.textContent = "Salvar";
//       }
//     });
  
//     // Utilitários
//     function showMessage(text, type = "") {
//       mensagem.textContent = text;
//       mensagem.className = "mensagem " + (type === "error" ? "error" : type === "success" ? "success" : "");
//     }
//     function clearMessage() {
//       mensagem.textContent = "";
//       mensagem.className = "mensagem";
//     }
  
//     function validar(d) {
//       if (!d.nome || d.nome.length < 3) return "Nome inválido";
//       if (!d.telefone || d.telefone.length < 10) return "Telefone inválido";
//       if (!d.cpf || d.cpf.length !== 11) return "CPF inválido";
//       if (!d.cep || d.cep.length !== 8) return "CEP inválido";
//       if (!d.endereco || d.endereco.length < 5) return "Endereço inválido";
//       // pode adicionar validação de CPF real aqui se quiser
//       return null;
//     }
  
//     // normaliza removendo tudo que não é dígito
//     function normalizeNumber(value) {
//       return String(value || "").replace(/\D/g, "");
//     }
  
//     // máscara: (99) 9 9999-9999 ou (99) 99999-9999
//     function maskPhone(v) {
//       v = v.replace(/\D/g, "");
//       if (v.length > 11) v = v.slice(0,11);
//       if (v.length <= 2) return v;
//       if (v.length <= 6) return `(${v.slice(0,2)}) ${v.slice(2)}`;
//       if (v.length <= 10) return `(${v.slice(0,2)}) ${v.slice(2,6)}-${v.slice(6)}`;
//       return `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
//     }
  
//     // máscara CPF: 000.000.000-00
//     function maskCPF(v) {
//       v = v.replace(/\D/g, "").slice(0,11);
//       return v.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, (m, a, b, c, d) => {
//         let out = `${a}`;
//         if (b) out += `.${b}`;
//         if (c) out += `.${c}`;
//         if (d) out += `-${d}`;
//         return out;
//       });
//     }
  
//     // máscara CEP: 00000-000
//     function maskCEP(v) {
//       v = v.replace(/\D/g, "").slice(0,8);
//       if (v.length <= 5) return v;
//       return `${v.slice(0,5)}-${v.slice(5)}`;
//     }
  
//   });