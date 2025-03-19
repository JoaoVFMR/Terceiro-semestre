export default function verificaCep(cep: string): boolean {
    const cepLimpo = cep.replace("-", "") // /\D/g

    if (cepLimpo.length !== 8) {
        return false
    }

    return true
}