const button = document.getElementById('btn');

const paragrafoMouse = document.getElementById('paragrafo');

function mudarCor() {
    button.style.color = "red";
    button.style.backgroundColor = "blue";
}

function mouseMove() {
    paragrafoMouse.style.color = "green";
    paragrafoMouse.style.backgroundColor = "yellow";
}