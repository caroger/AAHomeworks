function merge(array1, array2) {
  let sorted = [];
  while (array1.length || array2.length) {
    let ele1 = array1.length ? array1[0] : Infinity;
    let ele2 = array2.length ? array2[0] : Infinity;

    if (ele1 < ele2) {
      sorted.push(array1.shift());
    } else {
      sorted.push(array2.shift());
    }
  }
  return sorted;
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  let midPoint = Math.floor(array.length / 2);

  let leftArr = array.slice(0, midPoint);
  let rightArr = array.slice(midPoint);

  let sortedLeft = mergeSort(leftArr);
  let sortedRight = mergeSort(rightArr);

  return merge(sortedLeft, sortedRight);
}

module.exports = {
  merge,
  mergeSort,
};

