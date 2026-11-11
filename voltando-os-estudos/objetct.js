

let pessoa = {
    nome: "Mateus",
    idade: 20,
    altura: 1.75,

    carro: {
        marca: "Fiat",
        modelo: "Uno",
        ano: 2020   
    }
};

console.log(`${pessoa.nome} tem um carro da marca ${pessoa.carro.marca} e modelo ${pessoa.carro.modelo}.`);