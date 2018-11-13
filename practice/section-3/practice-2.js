'use strict'

// function createUpdatedCollection(collectionA, objectB) {
//   return 'Implement the practice require, and begin changing code in this row';
// }

var createUpdatedCollection = (list, itemList) => {
  let counter = 1
  itemList = flatten(itemList)
  list.forEach(item => {
    //obj[item.key] = item.count
    if (itemList.indexOf(item.key) !== -1) {
      item.count -= counter
      if (++counter > 3) {
        counter = 1
      }
    }
  })
  return list
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
