import { Controller, Get, Provide } from '@midwayjs/decorator';

@Provide()
@Controller('/')
export class HomeController {
  @Get('/')
  async home(): Promise<any> {
    return 'Hello Jigsaw H5!';
  }
}
