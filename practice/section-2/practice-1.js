'use strict';

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

