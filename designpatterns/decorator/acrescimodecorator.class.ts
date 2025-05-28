import Pizza from "./pizza.class"
export default abstract class AcrescimoDecorator extends Pizza {
    protected pizza: Pizza

    constructor(pizza: Pizza){
        super()
        this.pizza = pizza
    }

    abstract getDescricao(): string
    abstract getPreco(): number
}