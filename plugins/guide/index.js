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