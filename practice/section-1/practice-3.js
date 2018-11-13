'use strict'

// function collectSameElements(collectionA, objectB) {
//   return 'Implement the practice require, and begin changing code in this row';
// }

let collectSameElements = (listA, listB) => {
  let map = {}
  let result = []

  listB = flatten(listB)
  listA = flatten(listA)

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

let flatten = item => {
  let result = []

  if (item instanceof Array) {
    item.forEach(subItem => {
      let subResult = flatten(subItem)
      result = result.concat(subResult)
    })
  } else if (typeof item === 'object') {
    for (let i in item) {
      let subResult = flatten(item[i])
      result = result.concat(subResult)
    }
  }
  // exit
  else {
    return [item]
  }

  return result
}
