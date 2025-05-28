import PizzaQueijo from './pizzaqueijo.class'
import BordaRequeijao from './bordarequeijao.class'
import MassaIntegral from './massaintegral.class'

const pizzaQueijo = new PizzaQueijo()
console.log(pizzaQueijo.getDescricao())
console.log(pizzaQueijo.getPreco().toFixed(2))

console.log('Adicionando borda')

const pizzaQueijoBorda = new BordaRequeijao(pizzaQueijo)
console.log(pizzaQueijoBorda.getDescricao())
console.log(pizzaQueijoBorda.getPreco().toFixed(2))

console.log('Escolhendo massa integral')

const pizzaQueijoBordaIntegral = new MassaIntegral(pizzaQueijoBorda)
console.log(pizzaQueijoBordaIntegral.getDescricao())
console.log(pizzaQueijoBordaIntegral.getPreco())