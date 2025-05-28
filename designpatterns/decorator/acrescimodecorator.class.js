"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pizza_class_1 = __importDefault(require("./pizza.class"));
class AcrescimoDecorator extends pizza_class_1.default {
    constructor(pizza) {
        super();
        this.pizza = pizza;
    }
}
exports.default = AcrescimoDecorator;
