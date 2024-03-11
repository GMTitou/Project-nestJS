import { Module } from "@nestjs/common";
import { MessageController } from "./message.controller"
import { MessageService } from "./message.service";
import { PrismaClient } from "@prisma/client";

@Module({
    controllers: [MessageController],
    providers: [MessageService, PrismaClient],
})

export class MessageModule {}
