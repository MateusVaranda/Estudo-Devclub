let pessoaCadastro = {
    nome : "mateus",
    idade : 25,
    profissao : "Desenvolvedor",
    dadosPessoais : {
        cpf : "111.006.000-00",
        rg : "12.345.678-9",
        telefone : "(00) 90000-4444"
    },
    moradia : {
        cidade : "Barra do Garças",
        rua : "Rua das Flores",
        numero : 123,
        observacao : "Casa amarela com jardim"
    }
}

console.log(pessoaCadastro.idade) // Output: 25
console.log(pessoaCadastro.moradia.cidade) // Output: Barra do Garças
console.log(pessoaCadastro.dadosPessoais.cpf) // Output: 111.006.000-00
console.log(pessoaCadastro.dadosPessoais.rg) // Output: 12.345.678-9
console.log(pessoaCadastro.dadosPessoais.telefone) // Output: (00) 90000-4444