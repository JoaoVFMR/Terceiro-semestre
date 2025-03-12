import { soma, sub, mult, div } from "."
import {expect, test} from '@jest/globals'

test('Soma 1 + 2 é igual a 3', () => {
    expect(soma(1,2)).toBe(3)
})

test('Soma 2 + 3 é igual a 5', () => {
    expect(soma(2,3)).toBe(5)
})

test('Subtração 25 - 8 é igual a 17', () => {
    expect(sub(25,8)).toBe(17)
})

test('Multiplicação 5 * 4 é igual a 20', () => {
    expect(mult(5,4)).toBe(20)
})

test('Divisão 10 / 2 é igual a 5', () => {
    expect(div(10,2)).toBe(5)
})