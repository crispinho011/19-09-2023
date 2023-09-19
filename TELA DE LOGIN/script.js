function confirmarEntrada() {
    const nomeJogador = document.getElementById("nome").value;
    if (nomeJogador.trim() !== "") {
        // Se o jogador digitou um nome válido, redirecionar para a tela de confirmação.
        sessionStorage.setItem("nomeJogador", nomeJogador);
        window.location.href = "confirmacao.html";
    } else {
        alert("Por favor, digite um nome válido.");
    }
}