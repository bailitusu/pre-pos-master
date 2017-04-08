'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let result = collectionA.map(function (item) {
      for(var i = 0; i < objectB.value.length; i++) {
        if(item.key === objectB.value[i]) {
          item.count = item.count - 1;
          break;
        }
      }
      return item;
  });

  return result;
}
