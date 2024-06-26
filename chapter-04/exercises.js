////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = 1) {
  if (step === 0) {
     return [];
  } else if(start === end){
    return [];
  }
  else if ((step > 0 && end <= start) || (step < 0 && start <= end)) {
     return [];
  }

  const rangeArray = [];
  for (let i = start; step > 0 ? i <= end : end <= i; i += step) {
     rangeArray.push(i);
  }

  return rangeArray;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array, step=1) {
  //counter variable
  let count = 0;
  //for loop to ierate array of nums that allows input of step
  for(let i = 0; i < array.length; i += step){
    //increments count with value of array[i]
    count += array[i];
    
  }
  //returns total count
  return count;
}


////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  let reversedArray = [];
  for(let i = 0; i < array.length; i++){
    reversedArray.unshift(array[i]);
  }
  return reversedArray;

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  //variable set to array.length 
  let size = array.length;
  //create for loop to iterate thru half of array
  //math.floor(array.length /2)
  
  for(let i = 0; i < Math.floor(size/2); i++){
    console.log(i, size - 1 / 2, array[i], array[size-1-i], array);
    //assign array at index to variable swapped
    let swapped = array[i];
    //reassign array at index to value of reverse position from end of array
    array[i] = array[size-1-i];
    //reassign position from end of array to position from front of array
    array[size-1-i] = swapped;
  }
  //return modified array
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  //set list to null
  var list = null;
  //loop thru array from back to front
  for (var i = array.length - 1; i >=0; i--){
    //create nested objects that reference the next
    list = { value: array[i], rest: list};
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray({...list}, arr = []){
  arr.push(list.value);
  //using recursion return (if not null) invokation of itself with rest of list and updated arr
  return (list.rest != null) ? listToArray(list.rest, arr) : arr;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  list = {value: element, rest: list};
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {
  // Base: if list is null or number is negative, return undefined
  if (!list || num < 0) {
    return undefined;
  }

  // Base: if number is 0, return the value of the current list
  if (num === 0) {
    return list.value;
  }

  // recursion: move to the next node and decrement n
  return nth(list.rest, num - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(object1, object2) {
  //checks if both parameters same datatype 
  if(object1 === object2){
   return true; 
  }
  //if object is null or not an object they arent equal
  if (typeof object1 !== 'object' || object1 === null ||
      typeof object2 !== 'object' || object2 === null) {
    return false; 
  }

  // retrieve keys of each object
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  // checks if # of keys is same
  if (keys1.length !== keys2.length) {
    return false;
  }

  // checks if keys and value of both objects are equal
  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(object1[key], object2[key])) {
      return false;
    }
  }
  //returns true if keys of both objects are deeply equal
  return true; 
}








////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};