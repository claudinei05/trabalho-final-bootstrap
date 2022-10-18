const form = document.getElementById("register-form");
const email = document.getElementById("email");
const nome = document.getElementById("name");
const senha = document.getElementById("password");
const clickInput1 = document.querySelectorAll("button");

const salvarLocalStorage = () => {
  const salvarValoresdoLS = [
    {
      email: email.value,
      nome: nome.value,
      senha: senha.value,
    },
  ];
  const conta = localStorage.setItem("user", JSON.stringify(salvarValoresdoLS));
};

clickInput1.forEach(function (input) {
  input.addEventListener("click", () => {
    atualizarValidacao(email);
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
  const salvarValoresdoLS = {
    email: email.value,
    nome: nome.value,
    senha: senha.value,
    recados: [],
  };

  salvarLocalStorage(salvarValoresdoLS);
});

//Validação de todos os campos
function checkInput() {
  const nomeValue = nome.value;
  const emailValue = email.value;
  const senhaValue = senha.value;
  //   const confSenhaValue = confSenha.value;

  if (nomeValue === "") {
    errovalidacao(nome, "Preencha esse campo");
  } else {
    salvarValidacao(nome);
  }

  if (emailValue === "") {
    errovalidacao(email, "Preencha esse campo");
  } else {
    salvarValidacao(email);
  }

  if (senhaValue === "") {
    errovalidacao(senha, "Preencha esse campo");
  } else if (senhaValue.length < 8) {
    errovalidacao(senha, "A senha deve ter mais de 8 caracteres");
  } else {
    salvarValidacao(senha);
    window.location.href = "./index.html";
  }
}

function errovalidacao(input, message) {
  //parentElement: retorna referencia direta do pai'email' buscando minha <div class="full-box" inteira>
  const formfull_box = input.parentElement;
  const small = formfull_box.querySelector("small");
  small.innerText = message;
}
//salvar minhas validação
function salvarValidacao(input) {
  const formfull_box = input.parentElement;
  formfull_box;
}
//atualização de Validação
function atualizarValidacao() {
  const small = form.querySelectorAll("small");
  small.forEach(function (small) {
    small.innerText = "";
  });
}
function pagLogin() {
  window.location.href = "./index.html";
}
