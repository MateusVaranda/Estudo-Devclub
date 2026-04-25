


// -> Exemplo 1: Alterando o conteúdo de um elemento
// const element = document.querySelector("#main-input"); // Seleciona o elemento de entrada com o ID "main-input"
// element.placeholder = "Digite seu nome completo"; // Altera o valor do atributo "placeholder" do elemento de entrada
// console.log(element.placeholder);   // Saída: "Digite seu nome completo"


// -> Exemplo 2: Alterando elemento
// textContent: Altera o conteúdo de texto de um elemento
// innerHTML: Altera o conteúdo HTML de um elemento
// innerText: Altera o conteúdo de texto visível de um elemento, ignorando elementos ocultos e estilos CSS


const element = document.querySelector(".paragraph-js"); // Seleciona o elemento com a classe "paragraph-js"
element.innerHTML = "O conteúdo de texto foi alterado!"; // Altera o conteúdo de texto do elemento
console.log(element.innerHTML); // Saída: "O conteúdo de texto foi alterado!"

const button = document.querySelector("#btn"); // Seleciona o elemento de botão com o ID "btn"
button.style.backgroundColor = "blue"; // Altera a cor de fundo do botão para azul
button.style.color = "white"; // Altera a cor do texto do botão para branco
