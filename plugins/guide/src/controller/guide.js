import {
  Get,
  Controller,
  Middleware
} from 'bitorjs';
import Menu from '../menu/guide';
import Index from '../view/index';
import Install from '../view/install';
@Controller('/guide')
@Middleware(Menu)
export default class {
  @Get('/')
  async index(ctx) {
    ctx.render(Index)
  }

  @Get('/:name')
  async install(ctx) {
    import(`../view/${ctx.params.name}`).then(res => {
      ctx.render(res.default)
    })
  }
}