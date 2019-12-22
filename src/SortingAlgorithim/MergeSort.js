export function getMergeSortAnimations(array, animations) {
  
  if (array.length <= 1) return array;
  
  mergeSortHelper(array, animations);

  return animations;
}

function mergeSortHelper(arr,animations,) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, arr.length);

  mergeSortHelper(left, animations);
  mergeSortHelper(right, animations);

  doMerge(arr, left, right, animations);
}

function doMerge(mainArray, leftArray, rightArray, animations) {
  let i = 0;
  let j = 0;
  let k = 0;
  
  while (i < leftArray.length && j < rightArray.length) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (leftArray[i] <= rightArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the left array.
      animations.push([k, leftArray[i]]);
      mainArray[k] = leftArray[i];
      i++;
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the right array.
      animations.push([k, rightArray[j]]);
      mainArray[k] = rightArray[j];
      j++;
    }
    k++;
  }
  while (i < leftArray.length) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the leftArray array.
    animations.push([k, leftArray[i]]);
    mainArray[k++] = leftArray[i++];
  }
  while (j < rightArray.length) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the rightArray array.
    animations.push([k, rightArray[j]]);
    mainArray[k++] = rightArray[j++];
  }
}