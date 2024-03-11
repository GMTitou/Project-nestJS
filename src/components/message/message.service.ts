import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { NotFoundError } from 'rxjs';
import { CreateMessageDTO } from 'src/dto/CreateMessageDTO';
import { UpdateMessageDTO } from 'src/dto/UpdateMessageDTO';

@Injectable()
export class MessageService {

    constructor(private readonly prisma: PrismaClient) {}

    async findAll() {
        return await this.prisma.message.findMany();
    }

    async findAllByUser(userId: number) {
        return await this.prisma.message.findMany({
            where: {
                userId: userId
            }
        });
    }

    async findById(messageId: number) {
        return this.prisma.message.findUnique({
            where: {
                id: Number(messageId)
            },
        });
    }

    async createMessage(createMessageDTO: CreateMessageDTO) {
        const { userId, text } = createMessageDTO;

        return await this.prisma.message.create({
            data: {
                userId,
                text,
            },
        });
    }

    async updateMessage(messageId: number, updateMessageDTO: UpdateMessageDTO) {
        const { text } = updateMessageDTO;

        const message = await this.prisma.message.findUnique({
            where: { id: messageId },
        });

        if(!message) {
            throw new NotFoundException('Message introuvable!')
        }

        return await this.prisma.message.update({
            where: { id: messageId },
            data: { text: text },
        });
    }

    async deleteMessage(messageId: number) {

        console.log("message ID", messageId)

        const message = await this.prisma.message.findUnique({
            where: { id: messageId },
        });

        if(!message) {
            throw new NotFoundException('Message introuvable!')
        }

        return await this.prisma.message.delete({
            where: { id: messageId },
        })
    }
}
