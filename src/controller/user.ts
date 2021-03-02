import {
  Inject,
  Controller,
  Post,
  Put,
  Provide,
  Body,
  Param,
  ALL,
} from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from '../service/user';
import { IUserOptions } from '../interface';

@Provide()
@Controller('/api/user')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Post('/login')
  async login(@Body(ALL) options: IUserOptions): Promise<any> {
    const user = await this.userService.login(options);
    if (user.error) return { success: false, message: user.message };
    return { success: true, data: user };
  }
  @Post('/')
  async create(@Body(ALL) options: IUserOptions): Promise<any> {
    const user = await this.userService.create(options);
    if (user.error) return { success: false, message: user.message };
    return { success: true, data: user };
  }
  @Put('/:id')
  async updateUserById(
    @Param() id: number,
    @Body(ALL) options: IUserOptions
  ): Promise<any> {
    const user = await this.userService.updateUserById(id, options);
    return user;
  }
}
