//localStorage.setItem("conta", JSON.stringify(login));
function logar() {
  const user = JSON.parse(localStorage.getItem("user"));
  user.forEach((el) => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let id1 = email.value;
    let id2 = password.value;

    if (el.email == id1 && el.senha == id2) {
      window.location.href = "./listaRecados.html";
      alert("Você esta logado");
    } else {
      alert("Erro: senha ou email incorretos");
    }
  });
}
function criarConta() {
  window.location.href = "./criarConta.html";
}
