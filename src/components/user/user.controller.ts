import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    
    constructor(private readonly userService: UserService) {}

    @Get('show')
    async findAll() {
        return this.userService.findAll()
    }

    @Get('show/:id')
    async findOne(@Param('id') id: number) {
        return await this.userService.findOne(id);
    }

    @Post('/create')
    async create(@Body() userData: any) {
        return await this.userService.create(userData);
    }

    @Put('update/:id')
    async update(@Param('id') id: number, @Body() userData: any) {
        return await this.userService.update(id, userData);
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: number) {
        return await this.userService.remove(id);
    }
}