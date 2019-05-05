export default async (ctx, next) => {
  if (_czc) {
    _czc.push(["_trackPageview", ctx.to, ctx.from]);
  }

  return await next();
}