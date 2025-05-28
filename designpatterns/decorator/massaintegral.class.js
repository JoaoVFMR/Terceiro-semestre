"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const acrescimodecorator_class_1 = __importDefault(require("./acrescimodecorator.class"));
class MassaIntegral extends acrescimodecorator_class_1.default {
    getDescricao() {
        return this.pizza.getDescricao() + ' massa integral';
    }
    getPreco() {
        return this.pizza.getPreco() + 5;
    }
}
exports.default = MassaIntegral;
