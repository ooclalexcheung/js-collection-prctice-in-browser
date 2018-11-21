'use strict'

// function collectSameElements(collectionA, objectB) {
//   return 'Implement the practice require, and begin changing code in this row';
// }

function collectSameElements  (collectionA, objectB) {

  const ifElementExists = element => objectB.value.includes(element.key);
  const filteredElement = collectionA.filter(ifElementExists);
  const mappedElement = filteredElement.map(element => element.key);

  return mappedElement;

};

