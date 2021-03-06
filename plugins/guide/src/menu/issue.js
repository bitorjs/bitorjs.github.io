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
          name: 'babel 配置',
          url: '/issue/b',
          click
        },
        {
          name: 'vue 使用 bitorjs',
          url: '/issue/c',
          click
        },
        {
          name: 'webpack 打包nodejs',
          url: '/issue/d',
          click
        },
        {
          name: 'nodejs 使用 bitorjs',
          url: '/issue/e',
          click
        },
        {
          name: 'vue 使用 bitorjs(2)',
          url: '/issue/f',
          click
        },
        {
          name: 'vue 开发一个 插件',
          url: '/issue/g',
          click
        },
      ]
    },
  ]

  await next()
}