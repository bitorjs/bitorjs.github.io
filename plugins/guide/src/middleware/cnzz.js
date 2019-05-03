export default async (ctx, next) => {
  _czc.push(["_trackPageview", ctx.to, ctx.from]);
  return await next();
}