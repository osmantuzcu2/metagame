import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { CreateUserDto } from "src/user/user.dto";
import { User } from "src/user/user.entity";

@Controller("user")
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.createUser(createUserDto);
    }
    @Get("/helloWorld")
    helloWorld() {
        return this.userService.helloWorld();
    }
}
