import { Provide } from '@midwayjs/decorator';
import { Page } from '../entity/page';
import { Repository } from 'typeorm';
import { InjectEntityModel } from '@midwayjs/orm';
import { IPageOptions } from '../interface';

@Provide()
export class PageService {
  @InjectEntityModel(Page)
  pageModel: Repository<Page>;

  async create(options: IPageOptions): Promise<any> {
    const page = new Page();
    page.name = options.name;
    page.page = JSON.stringify(options.page);
    page.is_delete = false;
    page.creatorId = options.creatorId;
    const newPage = await this.pageModel.save(page);
    return newPage;
  }

  async getAllPages(userId: number): Promise<any> {
    const pages = await this.pageModel.find({
      select: ['id', 'name'],
      where: {
        is_delete: 0,
        creatorId: userId,
      },
    });
    return pages;
  }

  async getAllDeletedPages(userId: number): Promise<any> {
    const pages = await this.pageModel.find({
      select: ['id', 'name'],
      where: {
        is_delete: 1,
        creatorId: userId,
      },
    });
    return pages;
  }

  async getPageById(id: number): Promise<any> {
    const page = await this.pageModel.findOne({
      where: {
        is_delete: 0,
        id,
      },
    });
    return page;
  }

  async updatePageById(id: number, options: IPageOptions): Promise<any> {
    const { page, name, is_delete } = options;
    const oldPage = await this.pageModel.findOne({
      where: {
        id,
      },
    });
    if (page) oldPage.page = JSON.stringify(page);
    if (name) oldPage.name = name;
    if (is_delete !== undefined) oldPage.is_delete = is_delete;
    const newPage = await this.pageModel.save(oldPage);
    return newPage;
  }

  async deletePageById(id: number): Promise<any> {
    const oldPage = await this.pageModel.findOne({
      where: {
        id,
      },
    });
    if (oldPage.is_delete) {
      await this.pageModel.remove(oldPage);
    } else {
      oldPage.is_delete = true;
      await this.pageModel.save(oldPage);
    }
    return { success: true };
  }
}
