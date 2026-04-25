const botao = document.getElementById("meuBotao");
const inputs = document.querySelectorAll(".meuInput");

botao.addEventListener("click", function() {
    inputs.forEach(function(input) {
        console.log(input.value);
    });
});