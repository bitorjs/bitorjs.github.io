// highlight.js
import Hljs from 'highlight.js'
// import 'highlight.js/styles/googlecode.css'
import 'highlight.js/styles/monokai-sublime.css';

let Highlight = {}
Highlight.install = function (Vue, options) {
  Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
      console.log(block)

      block.innerHTML = `<ol><li>${block.innerHTML.replace(/\n/g, "\n</li><li>")}\n</li></ol>`
      Hljs.highlightBlock(block)
    })
  })

  // Vue.directive('highlight', {
  //   deep: true,
  //   bind: function (el, binding) {
  //     // on first bind, highlight all targets
  //     let targets = el.querySelectorAll('code')
  //     targets.forEach((target) => {
  //       // if a value is directly assigned to the directive, use this
  //       // instead of the element content.
  //       if (binding.value) {
  //         target.textContent = binding.value
  //       }
  //       Hljs.highlightBlock(target)
  //     })
  //   },
  //   componentUpdated: function (el, binding) {
  //     // after an update, re-fill the content and then highlight
  //     let targets = el.querySelectorAll('code')
  //     targets.forEach((target) => {
  //       if (binding.value) {
  //         target.textContent = binding.value
  //         Hljs.highlightBlock(target)
  //       }
  //     })
  //   }
  // })
}
console.log(Hljs)
export default Highlight