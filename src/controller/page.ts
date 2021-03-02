import {
  Inject,
  Controller,
  Get,
  Post,
  Put,
  Del,
  Provide,
  Query,
  Body,
  Param,
  ALL,
} from '@midwayjs/decorator';
import { Context } from 'egg';
import { PageService } from '../service/page';
import { IPageOptions } from '../interface';

@Provide()
@Controller('/api/page')
export class PageController {
  @Inject()
  ctx: Context;

  @Inject()
  pageService: PageService;

  @Get('/')
  async getAllPages(@Query() userId: number): Promise<any> {
    const pages = await this.pageService.getAllPages(userId);
    return pages;
  }

  @Get('/del')
  async getAllDeletedPages(@Query() userId: number): Promise<any> {
    const pages = await this.pageService.getAllDeletedPages(userId);
    return pages;
  }

  @Post('/')
  async create(@Body(ALL) options: IPageOptions): Promise<any> {
    const page = await this.pageService.create(options);
    return page;
  }

  @Get('/:id')
  async getPageById(@Param() id: number): Promise<any> {
    const page = await this.pageService.getPageById(id);
    return page;
  }

  @Put('/:id')
  async updatePageById(
    @Param() id: number,
    @Body(ALL) options: IPageOptions
  ): Promise<any> {
    const page = await this.pageService.updatePageById(id, options);
    return page;
  }

  @Del('/:id')
  async deletePageById(@Param() id: number): Promise<any> {
    const res = await this.pageService.deletePageById(id);
    return res;
  }
}
