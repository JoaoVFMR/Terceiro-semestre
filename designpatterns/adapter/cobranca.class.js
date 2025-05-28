"use strict";
class Cobranca {
    constructor(gateway) {
        this.gateway = gateway;
    }
    setGateway(gateway) {
        this.gateway = gateway;
    }
    setValor(valor) {
        this.gateway.setValor(valor);
    }
    setParcelas(parcelas) {
        this.gateway.setParcelas(parcelas);
    }
    setNumeroCartao(numeroCartao) {
        this.gateway.setNumeroCartao(numeroCartao);
    }
    setCVV(cvv) {
        this.gateway.setCVV(cvv);
    }
    realizarPagamento() {
        if (this.gateway.validarCartao()) {
            return this.gateway.realizarPagamento();
        }
        return false;
    }
}
