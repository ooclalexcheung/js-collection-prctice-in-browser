'use strict'

// function countSameElements(collection) {
//   return 'Implement the practice require, and begin changing code in this row';
// }

var countSameElements = list => {
  let map = {}
  let result = []

  list.forEach(item => {
    // remove all but char or digit
    item = item
      .replace(/([^0-9|^a-z|^A-Z]+)/g, ' ')
      .replace(/\s+/, ' ')
      .trim()
    let key = item
    let index = item.indexOf(' ')
    let value = 1
    if (index > -1) {
      key = item.split(' ')[0]
      value = +item.split(' ')[1]
      console.log('key: ' + key, 'value: ' + value)
    }
    map[key] = !map[key] ? value : value + map[key]
  })

  for (let i in map) {
    result.push({ name: i, summary: map[i] })
  }

  console.log(result)
  return result
}
