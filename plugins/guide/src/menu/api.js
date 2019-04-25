export default async (ctx, next) => {
  const store = ctx.$store.state.main;
  store.currentUrl = ctx.url;
  let click = (url) => {
    store.currentUrl = url;
    ctx.app.redirect(url)

  }
  ctx.$store.state.main.sideMenu = [
    {
      name: 'API',
      children: [
        {
          name: 'app',
          url: '/api/app',
          click
        },
        {
          name: 'context',
          url: '/api/context',
          click
        },
        {
          name: 'vue中数据请求',
          url: '/api/vue',
          click
        },
      ]
    },
  ]

  await next()
}