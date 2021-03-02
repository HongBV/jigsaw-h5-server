import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import * as orm from '@midwayjs/orm';
import { Application } from 'egg';

@Configuration({
  importConfigs: [
    './config/', // 自动加载 config 目录下所有 配置文件
  ],
  imports: [
    orm, // 加载 orm 组件
  ],
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  async onReady(): Promise<any> {
    // TODO
  }
}
