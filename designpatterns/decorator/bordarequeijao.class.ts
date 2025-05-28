
import AcrescimoDecorator from "./acrescimodecorator.class"
export default class BordaRequeijao extends AcrescimoDecorator {
    public getDescricao(): string {
        return this.pizza.getDescricao() + ' Borda requeijão'    
    }

    public getPreco(): number {
        return this.pizza.getPreco() + 8.50
    }
}