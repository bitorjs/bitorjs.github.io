export default (app) => {
  app.on('ready', () => {
    app.ctx.$store.state.main.topMenu.push({
      name: '教程',
      click: () => {
        app.redirect('/guide')
      }
    })

    app.ctx.$store.state.main.topMenu.push({
      name: 'API',
      click: () => {
        app.redirect('/api')
      }
    })

    app.ctx.$store.state.main.topMenu.push({
      name: '常见问题',
      click: () => {
        app.redirect('/issue/a')
      }
    })

    app.ctx.$store.state.main.topMenu.push({
      name: '案例',
      click: () => {
        window.location.href = 'https://github.com/bitorjs/sass-site'
      }
    })
    // github
    app.ctx.$store.state.main.topMenu.push({
      name: 'GitHub',
      click: () => {
        window.location.href = 'https://github.com/bitorjs/'
      }
    })
  })
  app.watch(require.context('./src', true, /^((?!\/view\/).)+\.(vue|js)$/));
}