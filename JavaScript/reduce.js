const produtos = [
    { nome: "Mouse", preco: 100 },
    { nome: "Teclado", preco: 150 },
    { nome: "Monitor", preco: 800 }
]

const valorTotal = produtos.reduce((acumulador, produto) => {
    return acumulador + produto.preco
}, 0)

console.log(valorTotal)

const cart = [
    { produtoName: 'abate', precokilo: 5, kg: 1 },
    { produtoName: 'abate', precokilo: 4.55, kg: 1.3 },
    { produtoName: 'abate', precokilo: 5.80, kg: 1.4 },
    { produtoName: 'abate', precokilo: 10, kg: 2.5 },
    { produtoName: 'abate', precokilo: 3.86, kg: 3 },
]

const finalValue = cart.reduce((acc, value) => {
    const resultadoKilo =  value.precokilo * value.kg
    return acc + resultadoKilo
}, 0)

console.log(`A sua compra ficou no valor total de:${finalValue}`)