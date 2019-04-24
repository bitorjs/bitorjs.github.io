import {
  Controller,
  Get,
  Post,
  Middleware
} from 'bitorjs';

import Index from '../view/pages';

@Controller('/')
export default class {

  @Get('/')
  async Index() {
    sessionStorage.clear();
    this.ctx.render(Index, null)
  }
}