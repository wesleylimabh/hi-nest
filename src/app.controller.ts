import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  getHome() {
    return 'Welcome to my movie API';
  }
}
