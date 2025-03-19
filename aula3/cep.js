"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = verificaCep;
function verificaCep(cep) {
    const cepLimpo = cep.replace("-", ""); // /\D/g
    if (cepLimpo.length !== 8) {
        return false;
    }
    return true;
}
