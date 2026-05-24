const number = [1, 2, 3, 4, 5, 6, 7]

const double = number.map((item) => item * 2)

const list = [
    {name: 'Mateus', vip: true },
    {name: 'Maria', vip: false },
    {name: 'Joao', vip: true },
    {name: 'Marcos', vip: true },
    {name: 'Pedro', vip: true },
    {name: 'Lucas', vip: false },
    {name: 'Carlos', vip: true }
]

const newList = list.map((user) => {
    const newUser = {
        name: user.name,
        braceletColor: user.vip ? 'Verde' : 'Preta'
    }
    return newUser
})

console.log(newList)
// quem for vip pulseira verde, quem nao for e preta