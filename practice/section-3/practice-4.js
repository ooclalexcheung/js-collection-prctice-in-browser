'use strict'

// function createUpdatedCollection(collectionA, objectB) {
//   return 'Implement the practice require, and begin changing code in this row';
// }

var createUpdatedCollection = (list, itemList) => {
  let counter = 1
  let result = []
  list = convertObj(flatten(list))
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
  console.log(list)
  return list
}

let convertObj = list => {
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
    }
    map[key] = !map[key] ? value : value + map[key]
  })

  for (let i in map) {
    result.push({ key: i, count: map[i] })
  }

  console.log(result)
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
