import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {

    constructor(private readonly prisma: PrismaClient) {}

    async findAll() {
        return await this.prisma.user.findMany();
    }

    async findOne(id: number) {
        return await this.prisma.user.findUnique({ where: { id }});
    }

    async create(data: any) {
        return await this.prisma.user.create({ data });
    }

    async update(id: number, data: any) {
        return await this.prisma.user.update({ where: { id }, data });
    }

    async remove(id: number) {
        return await this.prisma.user.delete({ where: { id }});
    }
}
