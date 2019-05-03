import {
  Get,
  Controller,
  Middleware
} from 'bitorjs';
import Menu from '../menu/issue';
@Controller('/issue')
@Middleware(Menu)
@Middleware("cnzz")
export default class {
  @Get('/:name')
  async index(ctx) {
    import(`../view/issue/${ctx.params.name}`).then(res => {
      ctx.render(res.default)
    })

  }
}