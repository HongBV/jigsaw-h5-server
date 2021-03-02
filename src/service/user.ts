import { Provide } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';
import { User } from '../entity/user';
import { Repository } from 'typeorm';
import { InjectEntityModel } from '@midwayjs/orm';
import CryptoJS = require('crypto-js');

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: Repository<User>;

  async login(options: IUserOptions): Promise<any> {
    const { account, password } = options;
    const user = await this.userModel.findOne({ account });
    if (!user) return { error: true, message: '账号不存在' };
    const originalUserPwd = this.decrypt(user.password);
    const originalPwd = this.decrypt(password);
    if (originalUserPwd !== originalPwd)
      return { error: true, message: '密码错误' };
    delete user.password;
    return user;
  }

  async create(options: IUserOptions): Promise<any> {
    const { account, password } = options;
    const exist = await this.userModel.findOne({ account });
    if (exist) return { error: true, message: '账号存在' };
    const user = new User();
    user.account = account;
    user.password = password;
    const newUser = await this.userModel.save(user);
    return newUser;
  }

  async updateUserById(id: number, options: IUserOptions): Promise<any> {
    const { account, password } = options;
    const user = await this.userModel.findOne({ where: { id } });
    if (account) user.account = account;
    if (password) user.password = password;
    const newUser = await this.userModel.save(user);
    return newUser;
  }

  decrypt(text: string): string {
    const originalText = CryptoJS.AES.decrypt(text, 'jigsaw-h5').toString(
      CryptoJS.enc.Utf8
    );
    return originalText;
  }
}
