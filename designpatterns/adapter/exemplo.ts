const topPagamentos = new TopPagamentos() // Lib externa
const pagFacilAdapter = new PagFacilAdapter()
const topPagamentosAdapter = new TopPagamentosAdapter(topPagamentos)

const cobranca = new Cobranca(pagFacilAdapter)
cobranca.setValor(100)
cobranca.setParcelas(1)
cobranca.setNumeroCartao('1234123412341234')
cobranca.setCVV('123')

if(cobranca.realizarPagamento()){
    console.log('sucesso!')
}

//cobranca.setGateway(topPagamentosAdapter)
const cobranca2 = new Cobranca(topPagamentosAdapter)
cobranca2.setValor(300)
cobranca2.setParcelas(3)
cobranca2.setNumeroCartao('1234123412341234')
cobranca2.setCVV('123')

if(cobranca2.realizarPagamento()){
    console.log('sucesso')
}