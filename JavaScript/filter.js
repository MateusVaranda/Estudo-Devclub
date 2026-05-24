



const festival = [
    { nome: 'Mateus', pagamento: true },
    { nome: 'Marcos', pagamento: false },
    { nome: 'Pedro', pagamento: false },
    { nome: 'João', pagamento: true },
    { nome: 'Jessica', pagamento: true },
    { nome: 'Taina', pagamento: false }
]

const aprovadosFestival = festival.filter(user => {
    return user.pagamento === true
})

console.log(aprovadosFestival)
