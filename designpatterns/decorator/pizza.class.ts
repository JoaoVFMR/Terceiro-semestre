export default abstract class Pizza {
    protected descricao: string = 'Não definido'
    protected preco: number = 0

    abstract getDescricao(): string
    abstract getPreco(): number
}