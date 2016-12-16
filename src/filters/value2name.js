import armap from 'array-map'
import find from 'array-find'

export default function (value, list) {
  let rs = armap(value, (one, index) => {
    return find(list, item => {
      return item.value === one
    })
  })
  return armap(rs, one => {
    return one.name
  }).join(' ').replace('--', '')
}
