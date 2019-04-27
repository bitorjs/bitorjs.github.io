export default async (ctx, next) => {
  const store = ctx.$store.state.main;
  store.currentUrl = ctx.url;
  let click = (url) => {
    store.currentUrl = url;
    ctx.app.redirect(url)

  }
  ctx.$store.state.main.sideMenu = [
    {
      name: '基础',
      children: [
        {
          name: '介绍',
          url: '/guide',
          click
        },
        {
          name: '目录结构',
          url: '/guide/dir',
          click
        },
        {
          name: '命名要求',
          url: '/guide/name',
          click
        },

        {
          name: '解析过程',
          url: '/guide/life',
          click
        }
      ]
    },
    {
      name: '开发',
      children: [
        {
          name: '安装',
          url: '/guide/install',
          click
        },
        {
          name: '实例',
          url: '/guide/application',
          click
        },
        {
          name: '目录监听',
          url: '/guide/watch',
          click
        },
        {
          name: '路由',
          url: '/guide/routes',
          click
        },
        {
          name: '存储访问',
          url: '/guide/store',
          click
        },
        {
          name: '服务层',
          url: '/guide/service',
          click
        },
        {
          name: 'Mock层',
          url: '/guide/mock',
          click
        },
        {
          name: '中间件',
          url: '/guide/middleware',
          click
        },
        {
          name: '公共组件',
          url: '/guide/component',
          click
        },
        {
          name: '过滤器',
          url: '/guide/filter',
          click
        },

        {
          name: '视图层',
          url: '/guide/view',
          click
        },
        {
          name: '项目配置',
          url: '/guide/config',
          click
        },
        {
          name: '插件配置',
          url: '/guide/plugin',
          click
        },
        {
          name: '插件开发',
          url: '/guide/plugin_dev',
          click
        },
      ]
    },
  ]

  await next()
}