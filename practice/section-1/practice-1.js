'use strict'

// function collectSameElements(collectionA, collectionB) {
//   return 'Implement the practice require, and begin changing code in this row';
// }

let collectSameElements = (listA, listB) => {
  let map = {}
  let result = []

  listB.forEach(item => {
    map[item] = 0
  })
  listA.forEach(item => {
    if (map[item] === 0) {
      result.push(item)
    }
  })

  return result
}
