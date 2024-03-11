import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './components/user/user.module';
import { MessageModule } from './components/message/message.module';
import { MiddlewareModule } from './middleware/middleware.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    UserModule,
    MessageModule,
    MiddlewareModule,
    ConfigModule.register({ 
      isGlobal: true,
      folder: './config',
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
