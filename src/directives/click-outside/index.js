export default {
  bind: function (el, {value}, vnode) {
    let onClickOutside=value
    document.addEventListener('click', function (e) {
      if (el && !el.contains(e.target)) {
        onClickOutside(e)
      }
    }, true)
  },
  unbind: function (el, {value}, vnode) {
    let onClickOutside=value
    document.removeEventListener('click', function (e) {
      if (el && !el.contains(e.target)) {
        onClickOutside(e)
      }
    }, true)
  }
}
