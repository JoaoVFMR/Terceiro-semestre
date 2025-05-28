export default class Consumidor {
    constructor(
        public nome: string,
        public cpf: string,
        public email: string
    ) { }
}

export default class Produto{
    constructor(
        public nome: string,
        public descricao: string,
        public preco: number
    ) { }
}