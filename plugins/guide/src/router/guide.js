import {
  Get,
  Controller,
  Middleware
} from 'bitorjs';
import Menu from '../menu/guide';
import Index from '../view/guide/index';
@Controller('/guide')
@Middleware(Menu)
@Middleware("cnzz")
export default class {
  @Get('/')
  async index(ctx) {
    ctx.render(Index)
  }

  @Get('/:name')
  async install(ctx) {
    import(`../view/guide/${ctx.params.name}`).then(res => {
      ctx.render(res.default)
    })
  }
}