import { IsNotEmpty, IsNumber } from "class-validator"

export class CreateProductDto {
    @IsNotEmpty({message: "nome é obrigatorio"})
    name: string;

    @IsNotEmpty({message: "Preço é obrigatório"})
    @IsNumber({}, {message: "Preço deve ser um número"})
    price: number;
}
