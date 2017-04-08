'use strict';

function collectSameElements(collectionA, collectionB) {
  let result = [];
  for(let i = 0; i < collectionA.length; i++) {
    for(let j = 0; j < collectionB.length; j++) {
      for(let k = 0; k < collectionB[j].length; k++) {
        if(collectionA[i] === collectionB[j][k]) {
          result.push(collectionA[i]);

        }
      }

    }
  }
  return result;
}
