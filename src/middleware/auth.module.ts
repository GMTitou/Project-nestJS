import { Module } from "@nestjs/common";
import { UserModule } from "src/components/user/user.module";
import { AuthService } from "./services/auth.service";

@Module({
    imports: [UserModule],
    providers: [AuthService], 
    exports: [AuthService]
})

export class AuthModule {}