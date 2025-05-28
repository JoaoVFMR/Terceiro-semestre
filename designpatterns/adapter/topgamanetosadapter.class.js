"use strict";
class TopPagamentosAdapter {
    constructor(topPagamentos) {
        this.numeroCartao = null;
        this.cvv = null;
        this.topPagamentos = topPagamentos;
    }
    setValor(valor) {
        this.topPagamentos.setValorTotal(valor);
    }
    setParcelas(parcelas) {
        this.topPagamentos.setQuantidadeParcelas(parcelas);
    }
    setNumeroCartao(numeroCartao) {
        this.numeroCartao = numeroCartao;
        if (this.cvv !== null) {
            this.topPagamentos.setCartao(this.numeroCartao, this.cvv);
        }
    }
    setCVV(cvv) {
        this.cvv = cvv;
        if (this.numeroCartao !== null) {
            this.topPagamentos.setCartao(this.numeroCartao, this.cvv);
        }
    }
    validarCartao() {
        return true;
    }
    realizarPagamento() {
        return this.topPagamentos.realizarPagamento();
    }
}
