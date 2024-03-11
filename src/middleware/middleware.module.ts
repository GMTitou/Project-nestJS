import { Module } from "@nestjs/common";
import { AuthMiddleware } from "./auth.middleware";
import { AuthService } from "./services/auth.service";

@Module({
    providers: [AuthMiddleware, AuthService],
    exports: [AuthService],
})

export class MiddlewareModule {}