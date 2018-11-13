'use strict'

// function countSameElements(collection) {
//   return 'Implement the practice require, and begin changing code in this row';
// }

var countSameElements = list => {
  let map = {}
  let result = []

  list.forEach(item => {
    let key = item
    let index = item.indexOf('-')
    let init = 1
    if (index > -1) {
      key = item.split('-')[0]
      init = +item.split('-')[1]
      console.log(key, init)
    }
    map[key] = !map[key] ? init : ++map[key]
  })

  for (let i in map) {
    result.push({ key: i, count: map[i] })
  }

  return result
}
