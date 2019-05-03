import {
  Get,
  Controller,
  Middleware
} from 'bitorjs';
// import Menu from '../menu/issue';
import joinView from '../view/join';
@Controller('/join')
// @Middleware(Menu)
@Middleware("cnzz")
export default class {
  @Get('/')
  async index(ctx) {

    ctx.render(joinView)


  }
}