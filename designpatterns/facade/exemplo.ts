import Consumidor from "./consumidor.class";
import EmailPedido from "./emailpedido.class";
import PagamentoBoleto from "./pagamentoboleto.class";
import Pedido from "./pedido.class";
import Produto from "./produto.class";

const consumidor = new Consumidor('Teste','12345678900', 'email@email.com');

const produto1 = new Produto ('Produto 1', 'Desc', 80.99)
const produto2 = new Produto ('Produto 2', 'Desc', 40.99)
const produto3 = new Produto ('Produto 3', 'Desc', 60.99)

const pedido = new Pedido(consumidor)
pedido.addProduto(produto1)
pedido.addProduto(produto2)
pedido.addProduto(produto3)

const pagamento = new PagamentoBoleto(pedido)
const email = new EmailPedido(pedido)

if(pagamento.realizarPagamento()){
    email.enviarEmail('Pagamento com sucesso!')
} else {
    email.enviarEmail('Pagamento com problema!')
}