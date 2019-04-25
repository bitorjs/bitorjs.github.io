import {
  Get,
  Controller,
  Middleware
} from 'bitorjs';
import Menu from '../menu/api';
import app from '../view/app';
import context from '../view/context';
import vue from '../view/vue';
@Controller('/api')
@Middleware(Menu)
export default class {
  @Get('/')
  async index(ctx) {
    ctx.app.redirect('/api/app')
  }

  @Get('/app')
  async t(ctx) {
    ctx.render(app)
  }

  @Get('/context')
  async ctss(ctx) {
    ctx.render(context)
  }

  @Get('/vue')
  async tet(ctx) {
    ctx.render(vue)
  }
}