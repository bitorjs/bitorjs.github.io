export default async (ctx, next) => {
  if (sessionStorage.token) {
    return await next()
  } else {
    ctx.app.redirect('/login')
  }
}