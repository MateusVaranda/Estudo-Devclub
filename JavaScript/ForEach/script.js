const cadastro = [ // Array de objetos representando pessoas cadastradas
    {
        nome: "João",
        idade: 25,
        endereço: "Rua A, 123"
    },
    {
        nome: "Maria",
        idade: 30,
        endereço: "Rua B, 456"
    },
    {
        nome: "Pedro",
        idade: 28,
        endereço: "Rua C, 789"
    }
]

cadastro.forEach((pessoa, index, array) => { // A função de callback recebe a pessoa e o índice como parâmetros
    console.log(`Índice: ${index} tamanho: ${array.length}, Pessoa:`, pessoa); // Exibe o índice, o tamanho do array e a pessoa atual
})