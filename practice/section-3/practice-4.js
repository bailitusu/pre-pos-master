'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let result = countSameElements(collectionA);

  return changeFunc(result,objectB);
}

function changeFunc(collectionA, objectB) {
  let result = collectionA.map(function (item) {
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

    let obj = {};
    if(splitFunc(item).isHave === true) {
      obj.key = splitFunc(item).key;
      obj.count = splitFunc(item).count;
    }else {
      let itemArray = collection.filter(function (value) {
        if(value === item) {
          return true;
        }
      });
      obj.key = item;
      obj.count = itemArray.length;
    }

    if(result.contains(obj.key) === false) {
      result.push(obj);
    }
  });

  return result;
}
function splitFunc(str) {
  let obj = {};
  if(str.indexOf("-") >= 0) {
    let tempArray = str.split("-");
    obj.key = tempArray[0];
    obj.count = parseInt(tempArray[1]);
    obj.isHave = true;
  }else {
    obj.isHave = false;
  }
  return obj;
}
