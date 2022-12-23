import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail, IsNotEmpty } from "class-validator";

//TODO: userAddresi kaydederken toLowerCase ile kaydedilmeli
@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({ unique: true, name: "address" })
    userAddress: string;
    @Column({ unique: true, name: "email" })
    @IsEmail({}, { message: "Incorrect email" })
    @IsNotEmpty({ message: "The email is required" })
    email: string;
    @Column({ nullable: true })
    description: string;
}
