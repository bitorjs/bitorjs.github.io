export default async (ctx, next) => {
  const store = ctx.$store.state.main;
  store.currentUrl = ctx.url;
  let click = (url) => {
    store.currentUrl = url;
    ctx.app.redirect(url)

  }
  ctx.$store.state.main.sideMenu = [
    {
      name: '应用',
      children: [
        {
          name: 'API',
          url: '/api',
          click
        },
        {
          name: 'Install',
          url: '/api/install',
          click
        },
      ]
    },
  ]

  await next()
}