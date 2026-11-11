const paragrafoElemento = document.querySelector('.paragrafo-js');


console.log(paragrafoElemento.textContent);  // Retorna o conteúdo de texto do elemento, incluindo espaços em branco e quebras de linha.
console.log(paragrafoElemento.innerText); // Retorna o conteúdo de texto do elemento, mas ignora espaços em branco e quebras de linha.
console.log(paragrafoElemento.innerHTML); // Retorna o conteúdo HTML do elemento, incluindo tags HTML e atributos.

const button = document.getElementById('btn');

button.style.color = "red"; // Altera a cor do texto do botão para vermelho.

button.style.backgroundColor = "blue"; // Altera a cor de fundo do botão para azul.