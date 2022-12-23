import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    userAddress: string;
    @IsNotEmpty()
    email: string;
    @IsOptional()
    description: string;
}
