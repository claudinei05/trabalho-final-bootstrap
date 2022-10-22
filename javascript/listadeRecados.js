//Meu array de recdos
let recados = [];

const formCadRecados = document.getElementById("formRecados-1");
const descricao = document.getElementById("Desc");
const detalhamento = document.getElementById("Det");
const mensErro = document.getElementById("msg-erro");

//atualizar local storage
const atLocalStorage = (recados) => {
  localStorage.setItem("recados", JSON.stringify(recados));
};
formCadRecados.addEventListener("submit", (e) => {
  e.preventDefault();

  const recado = {
    desc: descricao.value,
    det: detalhamento.value,
  };
  recados.push(recado);

  salvarRecados(e);
  criaRecado();
});

//Armazenar LocalStorage
const buscaLocalStorage = () => {
  let buscaLocalStorage1 = JSON.parse(localStorage.getItem("recados")) || [];
  return buscaLocalStorage1;
};

//Criar tabela de recados
function criaRecado() {
  let recados = buscaLocalStorage();
  let tbody = document.getElementById("tableBody");
  let numero = 1;
  tbody.innerHTML = "";
  for (const recado of recados) {
    tbody.innerHTML += `
    <tr>
    <th scope="row">${numero}

    </th>
    <td>${recado.desc}</td>
    <td>${recado.det}</td>
    <td>
        <button id="botao-editar" class="btn btn-primary p-1"onclick="btnEditar(${recado.id})">Editar</button>
        <button id="botao-apagar" class="btn btn-danger p-1"onclick="apagar(${recado.id})">Apagar</button>


    </td>
    
    `;

    numero++;
  }
}

criaRecado();

//Salvar recados
const salvarRecados = (event) => {
  event.preventDefault();

  mensErro.innerHTML = "";

  const thDesc = formCadRecados.Desc.value;
  const thDet = formCadRecados.Det.value;
  const erros = [];

  if (!thDesc || thDesc.length < 4) {
    erros.push("<p>Descrição invalida, necessario no minimo 4 caracteres!<p>");
  }
  if (!thDet || thDet.length <= 0) {
    erros.push("<p>Preencha o campo de Detalhamento.<p>");
  }
  if (erros.length > 0) {
    mensErro.innerHTML = erros.join(" ");
    return;
  }
  const recado3 = buscaLocalStorage();
  recado3.push({ id: recado3.length + 1, desc: thDesc, det: thDet });
  atLocalStorage(recado3);
  alert("Recado inserido com sucesso");
  criaRecado();
};
//Botão de apagar
let apagar = (id) => {
  const buscarRecados = buscaLocalStorage();
  const indexRecados = buscarRecados.findIndex((recados) => recados.id === id);
  if (indexRecados < 0) return;
  buscarRecados.splice(indexRecados, 1);
  atLocalStorage(buscarRecados);
  alert("Recado removido");

  criaRecado();
};
//Botão de editar
const btnEditar = (id) => {
  const edtRecados = buscaLocalStorage();
  const editarRecados = edtRecados.findIndex((recado) => recado.id === id);
  edtRecados[editarRecados].desc =
    prompt("Editar descrição:") || edtRecados[editarRecados].desc;

  edtRecados[editarRecados].det =
    prompt("Editar detalhamento:") || edtRecados[editarRecados].det;

  atLocalStorage(edtRecados);
  criaRecado();
  console.log(editarRecados);
};
function voltar() {
  window.location.href = "./index.html";
}
