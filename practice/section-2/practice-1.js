'use strict'

// function countSameElements(collection) {
//   return 'Implement the practice require, and begin changing code in this row';
// }

let countSameElements = list => {
  let map = {}
  let result = []

  list.forEach(item => {
    map[item] = !map[item] ? 1 : ++map[item]
  })

  for (let i in map) {
    result.push({ key: i, count: map[i] })
  }

  return result
}
