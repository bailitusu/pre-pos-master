'use strict';

function collectSameElements(collectionA, objectB) {
  let result = [];
  for(let i = 0; i < collectionA.length; i++) {
    let itemA = collectionA[i].key;
    let collectionB = objectB.value;
    for(let j = 0; j < collectionB.length; j++) {
      if(itemA === collectionB[j]) {

        result.push(itemA);
      }
    }
  }
  return result;
}
