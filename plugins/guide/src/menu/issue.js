export default async (ctx, next) => {
  const store = ctx.$store.state.main;
  store.currentUrl = ctx.url;
  let click = (url) => {
    store.currentUrl = url;
    ctx.app.redirect(url)

  }
  ctx.$store.state.main.sideMenu = [
    {
      name: '常见问题',
      children: [
        {
          name: '创建一个 vue 项目',
          url: '/issue/a',
          click
        },
        {
          name: 'webpack 打包 nodejs',
          url: '/issue/b',
          click
        },
        {
          name: 'babel 配置',
          url: '/issue/c',
          click
        },

      ]
    },
  ]

  await next()
}