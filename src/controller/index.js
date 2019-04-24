import {
  Controller,
  Get,
  Post,
  Middleware
} from 'bitorjs';

import login from '../view/pages/login';

@Controller('/')
export default class {

  @Get('/login')
  async login() {
    sessionStorage.clear();
    this.ctx.render(login, null)
  }
}