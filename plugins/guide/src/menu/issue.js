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
          name: '脚手架',
          url: '/issue/a',
          click
        },
        {
          name: 'vue 使用 bitorjs',
          url: '/issue/b',
          click
        },
        {
          name: 'babel 配置',
          url: '/issue/c',
          click
        },
        // {
        //   name: 'webpack 打包 nodejs',
        //   url: '/issue/d',
        //   click
        // },

      ]
    },
  ]

  await next()
}