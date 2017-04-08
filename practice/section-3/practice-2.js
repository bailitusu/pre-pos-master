'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let result = collectionA.map(function (item) {
    for(var i = 0; i < objectB.value.length; i++) {
      if(item.key === objectB.value[i]) {

        item.count = item.count - (item.count-item.count % 3) / 3;
        break;
      }
    }
    return item;
  });

  return result;
}
