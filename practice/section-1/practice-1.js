'use strict';

function collectSameElements(collectionA, collectionB) {
  let result = [];
  for(let i = 0; i < collectionA.length; i++) {
     for(let j = 0; j < collectionB.length; j++) {
      if(collectionA[i] === collectionB[j]) {
        result.push(collectionA[i]);
      }
     }
  }
  return result;
}

const collectionA = [
  'a', 'a', 'a',
  'e', 'e', 'e', 'e', 'e', 'e', 'e',
  'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
  't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
  'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
  'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
  'g', 'g', 'g', 'g', 'g', 'g', 'g',
  'b', 'b', 'b', 'b', 'b', 'b',
  'd-5'
];

function convertSpecialString(collectionA) {
  let result = [];
  let tempCollectionA = collectionA;
  for(let i = 0; i < collectionA.length; i++) {
    if(collectionA[i].indexOf("-") >= 0) {
      let tempArray = collectionA[i].split("-");
      tempCollectionA.splice(i,1);
      for(var j = 0; j < parseInt(tempArray[1]); j++) {
        tempCollectionA.splice(i+j,0,tempArray[0]);
      }
    }
  }
  console.log(tempCollectionA);
  return tempCollectionA;
}
convertSpecialString(collectionA);


function countSameElements(collectionA) {
  let result = [];
  for (let i = 0; i < collectionA.length; i++) {
    let itemArray = collectionA.filter(function (value) {
      if(value === collectionA[i]) {
        return true;
      }
    });
    let obj = {};
    obj.key = collectionA[i];
    obj.count = itemArray.length;
    
    if(result.contains(obj) === false) {
      result.push(obj);
    }
  }
}

function contrastsCollectionAAndObjectB(collenctionA,objectB) {
  let result = collenctionA;
  result.map(function (item) {
    
  })
}
