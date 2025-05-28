"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pizzaqueijo_class_1 = __importDefault(require("./pizzaqueijo.class"));
const bordarequeijao_class_1 = __importDefault(require("./bordarequeijao.class"));
const massaintegral_class_1 = __importDefault(require("./massaintegral.class"));
const pizzaQueijo = new pizzaqueijo_class_1.default();
console.log(pizzaQueijo.getDescricao());
console.log(pizzaQueijo.getPreco().toFixed(2));
console.log('Adicionando borda');
const pizzaQueijoBorda = new bordarequeijao_class_1.default(pizzaQueijo);
console.log(pizzaQueijoBorda.getDescricao());
console.log(pizzaQueijoBorda.getPreco().toFixed(2));
console.log('Escolhendo massa integral');
const pizzaQueijoBordaIntegral = new massaintegral_class_1.default(pizzaQueijoBorda);
console.log(pizzaQueijoBordaIntegral.getDescricao());
console.log(pizzaQueijoBordaIntegral.getPreco());
