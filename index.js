const para = document.querySelector("button");

para.addEventListener("click", atualizarNome);

function atualizarNome() {
  var nome = prompt("Insira um novo nome");
  para.textContent = "Jogador 1: " + nome;
}