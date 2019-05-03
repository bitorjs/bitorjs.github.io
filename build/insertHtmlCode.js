// 找到了webpack的插件事件，在html-webpack-plugin生成最终html之后，再插入php代码就行了
function insertHtmlCode(options) {
  // Configure your plugin with options...
  this.options = options.options
}

insertHtmlCode.prototype.apply = function (compiler) {
  var condition = this.options.condition,
    phpCode = this.options.phpCode
  compiler.plugin('compilation', function (compilation) {

    compilation.plugin('html-webpack-plugin-after-html-processing', function (htmlPluginData, callback) {
      htmlPluginData.html = htmlPluginData.html.toString().split(condition)[0] + phpCode + htmlPluginData.html.toString().split(condition)[1]
      callback(null, htmlPluginData);
    });
  });

};

module.exports = insertHtmlCode;