import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthMiddleware } from './middleware/auth.middleware';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('auth/user')
  @UseGuards(AuthMiddleware)
  async getUser(@Req() req) {
    try {
      const user = req.user; 
      return { user };
    } catch (error) {
      console.error('Error', error);
      return { error: 'Internal server error'}
    }
  }
}