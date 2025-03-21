import { IsEmail, IsNotEmpty} from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({message: "Nome obrigatório"})
    name: string;
    email: string;
}
