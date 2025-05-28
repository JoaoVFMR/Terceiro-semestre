"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pizza_class_1 = __importDefault(require("./pizza.class"));
class PizzaFrango extends pizza_class_1.default {
    constructor() {
        super();
        this.descricao = 'Pizza de frango';
        this.preco = 19;
    }
    getDescricao() {
        return this.descricao;
    }
    getPreco() {
        return this.preco;
    }
}
exports.default = PizzaFrango;
