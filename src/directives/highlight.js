// highlight.js
import Hljs from 'highlight.js'
// import 'highlight.js/styles/googlecode.css'
import 'highlight.js/styles/monokai-sublime.css';

let Highlight = {}
Highlight.install = function (Vue, options) {
  Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
      if (block.innerHTML.indexOf(`<ol><li>`) === -1) {
        block.innerHTML = `<ol><li>${block.innerHTML.replace(/^\n+|\n+\s+$/g, "").replace(/\n/g, "\n</li><li>")}\n</li></ol>`
        Hljs.highlightBlock(block)
      }

    })
  })
}
export default Highlight