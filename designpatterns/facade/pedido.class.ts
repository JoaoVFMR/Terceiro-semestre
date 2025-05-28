import Consumidor from "./consumidor.class";
import Produto from "./produto.class";

export default class Pedido {
    public produtos: Produto[] = [];

    constructor(public consumidor: Consumidor) {}

    addProduto(produto: Produto) {
        this.produtos.push(produto);
    }

    getTotal(): number{
        return 0
    }
}