import {
  Get,
  Controller,
  Middleware
} from 'bitorjs';
import Menu from '../menu/issue';
@Controller('/issue')
@Middleware(Menu)
export default class {
  @Get('/:name')
  async index(ctx) {
    console.log(ctx.params.name)
    import(`../view/issue/${ctx.params.name}`).then(res => {
      ctx.render(res.default)
    })

  }
}