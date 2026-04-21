function mostrar() {  //essa função é chamada quando o botão é clicado
    let nome = document.getElementById("nome").value; //aqui estamos pegando o valor do input com id "nome" e armazenando na variável nome
    console.log("Ola seja bem-vindo, " + nome); //aqui estamos imprimindo no console a mensagem de boas vindas junto com o nome que foi digitado no input
}