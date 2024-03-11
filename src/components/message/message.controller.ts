import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { MessageService } from "./message.service";
import { CreateMessageDTO } from "src/dto/CreateMessageDTO";
import { UpdateMessageDTO } from "src/dto/UpdateMessageDTO";

@Controller('message')
export class MessageController {

    constructor(private readonly messageService: MessageService) {}

    @Get('show/all')
    async findAll() {
        return this.messageService.findAll()
    }

    @Get('show/all-for-user')
    async findAllByUser(@Body('userId') userId: number) {
        return this.messageService.findAllByUser(userId)
    }

    @Get('show/unique/:id')
    async findById(@Param('id') messageId: number) {
        return this.messageService.findById(messageId);
    }

    @Post('create')
    async createMessage(@Body() createMessageDTO: CreateMessageDTO) {
        return await this.messageService.createMessage(createMessageDTO);
    }

    @Put('update/:id')
    async updateMessage(@Param('id') id: string, @Body() updateMessageDTO: UpdateMessageDTO) {
        const messageId = parseInt(id, 10);

        try {
            return await this.messageService.updateMessage(messageId, updateMessageDTO);
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException('Message introuvable');
            }
            throw error;
        }
    }

    @Delete('delete/:id')
    async deleteMessage(@Param('id') id: number) {
        return this.messageService.deleteMessage(id)
    }
}