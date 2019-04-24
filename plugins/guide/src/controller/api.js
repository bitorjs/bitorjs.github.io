import {
  Get,
  Controller,
  Middleware
} from 'bitorjs';
import Menu from '../menu/api';
import Index from '../view/index';
import Install from '../view/install';
@Controller('/api')
@Middleware(Menu)
export default class {
  @Get('/')
  async index(ctx) {
    ctx.render(Index)
  }

  @Get('/install')
  async install(ctx) {
    ctx.render(Install)
  }
}