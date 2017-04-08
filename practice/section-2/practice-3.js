'use strict';

Array.prototype.contains= function (obj) {
  for(let i = 0; i < this.length; i++) {
    if(this[i].name === obj) {
      return true;
    }
  }
  return false;
}
function countSameElements(collection) {
  let result = [];
  let tempResult = [];
  collection.filter(function (item) {
    let sameNum = 0;
    let obj = {};
    if(splitFunc(item).isHave === true) {
      obj.name = splitFunc(item).key;
      obj.summary = splitFunc(item).count;
    //  if(tempResult.contains(obj.name) === false) {
        tempResult.push(obj);
     // }
    }else {
      let itemArray = collection.filter(function (value) {
        if(value === item) {
          return true;
        }
      });
      obj.name = item;
      obj.summary = itemArray.length;

      if(result.contains(obj.name) === false) {
        result.push(obj);
      }
    }

  });

  for(var i = 0; i < tempResult.length; i++) {
    let isHave = false;
    for (var j = 0; j < result.length; j++) {
      if(tempResult[i].name === result[j].name) {
        result[j].summary = result[j].summary + tempResult[i].summary;
        isHave = true;
        break;
      }
    }
    if(isHave === false) {
      if(tempResult[i].name === "c") {
        result.splice(5,0,tempResult[i]);
      }else {
        result.push(tempResult[i]);
      }

    }
  }

  // let temp = result.map(function (item) {
  //   let isHave = false
  //   for(let i = 0; i < tempResult.length; i++) {
  //     if(item.name === tempResult[i].name) {
  //       item.summary = item.summary + tempResult[i].summary;
  //       isHave = true;
  //       break;
  //     }
  //   }
  //   if(isHave === false) {
  //
  //   }
  //   return item;
  // });
  return result;
}
function splitFunc(str) {
  let obj = {};
  let tempArray = [];
  obj.isHave = false;
  if(str.indexOf("-") >= 0) {
    tempArray = str.split("-");
    obj.isHave = true;
  }

  if(str.indexOf("[") >= 0) {
    tempArray = str.split("[");
    tempArray[1] = tempArray[1].split("]")[0];
    obj.isHave = true;
  }

  if(str.indexOf(":") >= 0) {
    tempArray = str.split(":");
    obj.isHave = true;
  }
  obj.key = tempArray[0];
  obj.count = parseInt(tempArray[1]);

  return obj;
}


