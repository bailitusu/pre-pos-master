'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let result = countSameElements(collectionA);
  return changeFunc(result,objectB);
}

function changeFunc(collectionA, objectB) {
  var result = collectionA.map(function (item) {
    for(var i = 0; i < objectB.value.length; i++) {
      if(item.key === objectB.value[i]) {

        item.count = item.count - (item.count-item.count % 3) / 3 * 1;
        break;
      }
    }
    return item;
  });

  return result;
}

Array.prototype.contains= function (obj) {
  for(let i = 0; i < this.length; i++) {
    if(this[i].key === obj) {
      return true;
    }
  }
  return false;
}
function countSameElements(collection) {
  let result = [];
  collection.filter(function (item) {
    let itemArray = collection.filter(function (value) {
      if(value === item) {
        return true;
      }
    });
    let obj = {};
    obj.key = item;
    obj.count = itemArray.length;

    if(result.contains(obj.key) === false) {
      result.push(obj);
    }
  });

  return result;
}
