const pessoa = {
    nome: "Mateus",
    idade: 30,
    cidade: "São Paulo"
}

for (let chave in pessoa) {
    console.log(chave)
    console.log(pessoa[chave])
}

// for (let chave in pessoa) {
//     console.log(chave); // Imprime as chaves do objeto

//for (let chave in pessoa) {
// console.log(chave + ": " + pessoa[chave]); // Imprime as chaves e os valores do objeto

