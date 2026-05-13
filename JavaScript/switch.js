let statusPedido = "enviado"

switch (statusPedido) {
    case "pendente":
        console.log("Aguardando pagamento")
        break

    case "pago":
        console.log("Pagamento aprovado")
        break

    case "enviado":
        console.log("Pedido saiu para entrega")
        break

    case "entregue":
        console.log("Pedido entregue")
        break

    default:
        console.log("Status inválido")
}