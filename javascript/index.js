function logar() {
  const user = JSON.parse(localStorage.getItem("user"));
  user.forEach((el) => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let id1 = email.value;
    console.log(password);
    let id2 = password.value;

    if (el.email == id1 && el.senha == id2) {
      const alertContaCriada = document.getElementById("alert-logado");
      alertContaCriada.innerHTML = `
          <div class="alert alert-success" role="alert">
             A simple success alert—check it out!
          </div>
          `;
      setTimeout(() => {
        window.location.href = "listaRecados.html";
      }, 2000);
    } else {
      alert("Erro: senha ou email incorretos");
    }
  });
}
let meuBtnLogar = document.getElementById("logar");
meuBtnLogar.addEventListener("click", (e) => {
  e.preventDefault();
  logar();
});

function criarConta() {
  window.location.href = "./criarConta.html";
}
