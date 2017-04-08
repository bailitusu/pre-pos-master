'use strict';

function collectSameElements(collectionA, objectB) {
  let result = [];
  for(let i = 0; i < collectionA.length; i++) {
    let collectionB = objectB.value;
    for(let j = 0; j < collectionB.length; j++) {
      if(collectionA[i] === collectionB[j]) {

        result.push(collectionA[i]);
      }
    }
  }
  return result;
}
