# bitorjs 官网
> BitorJS 是一个新的、独立的 前端框架，但是，我更期望它是一个易扩展，方便使用的前端框架。

### 特点

- Bitorjs 简单、易学、易用，入门快。

- 可以选择自己喜欢或擅长的视图模板引擎（Vue or React）来进行项目开发

- 可以根据需要扩展视图模板的支持

- 不使用 Vue 传统节点路由，而是使用 controller 注解来定义 项目的跳转路由，api请求路由

- 自定义 项目文件的监听规则，使用后期可以自动进行批处理（如组件的自动注册，路由的自动注入等）。[参考配置](https://github.com/bitorjs/watcher)

- 自定义 项目启动类，继承自 Application。主要接入了 Application 的路由系统，后期可进行路由的注入，路由查找

- 自定义 路由控制器，使用 Decorators 提供的注解方法。再也不用把 路由写在视图的标签节点上了，可以放心只写自己擅长的 页面视图就可以，路由的事，交于 控制器。


### 目前框架解决了哪些问题

- 路由系统不一
```
虽然，比较火的前端 SPA 框架都有 hash ,html5 类似的路由处理，但各家产品的处理不一，在切换 框架使用时，总是要重新进行查看API
```
- 项目结构不一
```
不解析
```

### 安装

> npm -g bitorjs-cli

> bitor new -v [project_name] 新建 vue 为视图模板 项目

> bitor new -r [project_name] 新建 react 视图模板 项目


### API

- Application (bitorjs-application) 自定义应用扩展类 入口
  - startServer   开启路由监听
  - registerRoute 注入路由
  - match         查找指定 url 下的路由回调
  - use           注入中间件

- Decorators (bitorjs-decorators) 注解
  - Get 
  - Post
  - Put
  - Delete
  - namespace 类注解


- webpackPlugin (bitorjs-watcher) 自定义项目文件监听 webpack 插件
  - root      项目文件监听根目录
  - cachefile 缓存文件名
  - rules     配置监听项目文件的规则
  - normalize 规格化 cachefile 文件内容