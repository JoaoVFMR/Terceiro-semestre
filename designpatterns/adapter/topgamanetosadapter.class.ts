class TopPagamentosAdapter implements Gateway {
    private topPagamentos: TopPagamentos
    private numeroCartao: string | null = null
    private cvv: string | null = null

    constructor(topPagamentos: TopPagamentos){
        this.topPagamentos = topPagamentos
    }

    setValor(valor: number): void {
        this.topPagamentos.setValorTotal(valor)
    }

    setParcelas(parcelas: number): void {
        this.topPagamentos.setQuantidadeParcelas(parcelas)
    }

    setNumeroCartao(numeroCartao: string): void {
        this.numeroCartao = numeroCartao;
        if(this.cvv !== null){
            this.topPagamentos.setCartao(this.numeroCartao, this.cvv)
        }
    }

    setCVV(cvv: string): void {
        this.cvv = cvv
        if(this.numeroCartao !== null){
            this.topPagamentos.setCartao(this.numeroCartao, this.cvv)
        }
    }

    validarCartao(): boolean {
        return true
    }

    realizarPagamento(): boolean {
        return this.topPagamentos.realizarPagamento()
    }
}