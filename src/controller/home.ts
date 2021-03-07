import { Inject, Controller, Get, Provide } from '@midwayjs/decorator';
import { Context } from 'egg';

@Provide()
@Controller('/')
export class HomeController {
  @Inject()
  ctx: Context;
  @Get('/')
  async home(): Promise<any> {
    await this.ctx.render('index');
  }
}
