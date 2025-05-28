import Pizza from "./pizza.class"
export default class PizzaFrango extends Pizza {
    constructor() {
        super()
        this.descricao = 'Pizza de frango'
        this.preco = 19
    }

    public getDescricao(): string {
        return this.descricao    
    }

    public getPreco(): number {
        return this.preco
    }
}