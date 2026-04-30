const botao = document.getElementById("botao");

botao.addEventListener("mouseover", function() {
    botao.style.backgroundColor = "red";
});

botao.addEventListener("mouseout", function() {
    botao.style.backgroundColor = "blue";
});
